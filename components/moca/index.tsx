import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Input } from 'antd';
import MocaCard from '../moca-card';
import avatar1 from '../../public/images/avatar1.png';

import styles from './index.module.less';

const generText = () => {
  const list = [];
  for (let i = 0; i < 20; i = i + 1) {
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
export default function Moca({ backCall }) {
  const cls = classnames('flex justify-evenly items-center flex-wrap', styles.container);
  const con = classnames('flex justify-center items-center flex-wrap', styles.con);
  const [line, setLine] = useState(0);
  const [wid, setWid] = useState(0);
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
  const lists = generText();
  return (
    <div className="flex w-screen min-h-screen bg-black justify-center">
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
              {lists.map((item) => {
                return <MocaCard avatar={avatar1} name="Max Mara" text={item.text} />;
              })}
            </div>

            <div className={styles.iptBox}>
              <Input className={styles.ipt}></Input>
              <img src="/images/input_icon.png" className={styles.ic} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
