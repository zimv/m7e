import React, { useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import { Input } from 'antd';
import BulletScreen from 'rc-bullets';
import MocaCard from '../moca-card';
import avatar1 from '../../public/images/avatar1.png';

import styles from './index.module.less';

const generText = (n) => {
  const list = [];
  for (let i = 0; i < n; i = i + 1) {
    list.push({
      text: `Time Currents is created amid musings: life unfolds itself in a patterned manner, yet we
      hold the power to choose how to ride waves of time. The pixels, which represent time units,
      are liquified and reborn into new shades and shapes.`.slice(0, Math.random() * 300),
    });
  }
  list.sort((a, b) => {
    return a.text.length - b.text.length;
  });
  return list;
};
const lists = generText(20);

const headUrl = 'https://zerosoul.github.io/rc-bullets/assets/img/heads/girl.jpg';
export default function Moca({ backCall }) {
  const wrap = classnames('flex w-screen min-h-screen bg-black justify-center', styles.wrap);
  const cls = classnames('flex justify-evenly items-center flex-wrap', styles.container);
  const con = classnames('flex justify-center items-center flex-wrap', styles.con);
  const lastMsgId = useRef(null);
  const historyList = useRef(null)
  const [line, setLine] = useState(0);
  const [wid, setWid] = useState(0);
  // 弹幕屏幕
  const [screen, setScreen] = useState(null);
  // 弹幕内容
  const [bullet, setBullet] = useState('');
  const [bulletRender, setBulletRender] = useState(0);

  useEffect(() => {
    // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块。此处的配置项全局生效
    const s = new BulletScreen('#screen', { duration: 20 });
    setScreen(s);

    // 定时获取弹幕
    let timer = null;
    const timeouts = [];
    const doGet = async () => {
      const history = await getHistory();
      let currentShowList = [];
      if(historyList.current===null) {
        historyList.current = history;
      }else{
        history.find((item) => {
          if(lastMsgId.current === item._id){
            return true;
          }
          currentShowList.push(item)
        });
      }
      currentShowList = currentShowList.concat(historyList.current.splice(0,2))

      currentShowList.forEach((item) => {
        const t = setTimeout(() => {
          s.push({
            msg: item.msg,
            //head: headUrl,
            color: '#eee',
            size: 'small',
            backgroundColor: 'rgba(2,2,2,.3)',
          });
          setBulletRender((n) => {
            return n + 1;
          });
        }, Math.random() * 10000);
        timeouts.push(t);
      });
      lastMsgId.current = history[0]._id;
    };
    timer = setInterval(() => {
      timeouts.forEach((item) => {
        clearTimeout(item);
      });
      doGet();
    }, 10000);
    doGet();
    return () => {
      timeouts.forEach((item) => {
        clearTimeout(item);
      });
      // 组件销毁时，清除定时器
      clearInterval(timer);
    };
  }, []);

  // 获取历史消息
  const getHistory = async () => {
    const res = await window.fetch('/api/bullet?method=history');
    const data = await res.clone().json()
    console.log(data)
    return data.result.messages
  };

  // 弹幕内容输入事件处理
  const handleChange = ({ target: { value } }) => {
    setBullet(value);
  };
  // 发送弹幕
  const handleSend = async () => {
    if (bullet) {
      setBullet('');
      // screen.push({
      //   msg: bullet,
      //   head: headUrl,
      //   color: 'red',
      //   size: 'small',
      //   backgroundColor: 'rgba(1,2,2,.3)',
      // });
      const res = await sendMsg(bullet);
      res.clone().text().then(async data=>{
        if(data=='401') {
          alert('请登录');
          await login('test1');
          await sendMsg(bullet);
          doGet();
        }
      })
    }
  };
  // 登录
  const login = async (address) => {
    await window.fetch('/api/bullet?method=login&userName=' + address);
    return true
  };
  // 发送消息
  const sendMsg = async (bullet) => {
    return window.fetch('/api/bullet?method=send', {
      method: 'post',
      body: bullet
    });
  };
  useEffect(() => {
    const clientWidth = window.innerWidth || document.body.clientWidth;
    if (clientWidth < 600) {
      setLine(1);
      setWid(300);
    } else if (clientWidth < 900) {
      setLine(2);
      setWid(600);
    } else if (clientWidth < 1200) {
      setLine(3);
      setWid(900);
    } else {
      setLine(4);
      setWid(1200);
    }
  }, []);
  return (
    <div className={wrap} id="screen" data-bulles={bulletRender}>
      <div className={styles.box}>
        <div className={cls}>
          <div className={styles.head}>
            <div className={styles.title}>
              Self Awakened
              <div className={styles.cn}>自我的觉醒</div>
            </div>
            <div className={styles.back} onClick={backCall}>
              <span className={styles.name}>metaverse exhibition</span>
              <div className={styles.ic}>
                <img src="/images/arrow.png"></img>
              </div>
            </div>
          </div>
          <div className={styles.list}>
            <div
              className={con}
              style={{
                MozColumnCount: line,
                WebkitColumnCount: line,
                columnCount: line,
                width: wid,
              }}
            >
              {lists.map((item, index) => {
                return <MocaCard avatar={avatar1} name="Max Mara" text={item.text} key={index} />;
              })}
            </div>

            <div className={styles.iptBox}>
              <Input
                className={styles.ipt}
                value={bullet}
                onChange={handleChange}
                onPressEnter={handleSend}
              ></Input>
              <img src="/images/input_icon.png" className={styles.ic} onClick={handleSend} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
