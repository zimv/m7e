import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import MocaCard from '../moca-card';
import Bullet from './Bullet';
import avatar1 from '../../public/images/avatar1.png';

import styles from './index.module.less';

interface DataItem {
  url: string;
  author: string | string[];
  twitter: string | string[];
  platform: string;
  platformLink: string;
  title: string;
}

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

export default function Moca({ backCall }) {
  const wrap = classnames('flex w-screen min-h-screen bg-black justify-center', styles.wrap);
  const cls = classnames('flex justify-evenly items-center flex-wrap', styles.container);
  const con = classnames('flex justify-center items-center flex-wrap', styles.con);
  const [line, setLine] = useState(0);
  const [wid, setWid] = useState(0);
  // 发送弹幕
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
    <div className={wrap} id="screen">
      <div className={styles.box}>
        <div className={cls}>
          <div className={styles.head}>
            <div className={styles.title}>
              MOCA Exhibition: Self Awakened
              <img src="/images/Vector.png" />
            </div>
            <div className={styles.cn}>MOCA 展：自我的觉醒</div>
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

            <Bullet channel="moca" domId="screen" />
          </div>
        </div>
      </div>
    </div>
  );
}
