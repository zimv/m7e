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
  type: string;
  desc: string;
}

const dataList = [
  {
    url: 'https://assets.foundation.app/5Y/dX/Qmbu5SDtGjmr1xhAQie46fxrCVzBhiaZ55rCSSaPHe5YdX/nft.mp4',
    author: ['Baiwei'],
    twitter: ['https://twitter.com/baiweiart'],
    title: 'Identity',
    platform: 'Foundation',
    platformLink: 'https://foundation.app/@baiwei/identity-11381',
    type: 'video',
    desc: 'Energy bundle,Dancing through the tides of life,Looped, experiencing,The artwork explores the concept of identity on a personal level. Artist’s identity is shown as an animated specimen. This energy bundle is struggling to find and express itself within the limited space - connecting, reflecting, dancing, fighting to escape, and eventually embracing itself. The identity finds balance and transcends the limits.The loop of life begins again.Music by Baiwei.Inspired by Daoist dualist thought.',
  },
  {
    url: 'https://res.cloudinary.com/asynchronous-art-inc/image/upload/h_1280,f_auto/art/0x4bd3d08bae19c45b3bce064bfec0d5865baf458a/QmU9w19o9oWWoHvUH9JxDNdfQcuh4PGfLve6xkR9FrqE2s?01d3',
    author: ['IOYOI'],
    twitter: ['https://twitter.com/ioyoiioaoi'],
    title: 'Fortune telling bird 2.0',
    platform: 'Async',
    platformLink:
      'https://async.art/zh/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-2889?1629791698866',
    type: 'image',
    desc: '區塊鏈的社群通常用紅色眼睛代表幣圈覺醒，所有的市場事件被一切程序所掌控。創作者以鳥卦的形式製作日夜兩種版本，白天以XP桌面為背景，前面則擺放程序出錯的視窗，計算出一切可能出錯的視窗',
  },
  {
    url: 'https://lh3.googleusercontent.com/lmKHUmch0ZY7_iFsBIGu93n1w9e_Erd9wl54j-F-WCRHqOrJaWnZtYEBoNKBD9Z4sdXFKILPWNqF5_VoPXlQUS96SCIF-6yYcrqHHA=w600',
    author: ['metaSynth'],
    twitter: ['https://twitter.com/meta_Synth'],
    title: 'Time Currents',
    platform: 'OpenSea',
    platformLink:
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/92854960588464254555946828023973119272598955986146577935146406044824070258689/',
    type: 'image',
    desc: 'Time Currents is created amid musings: life unfolds itself in a patterned manner, yet we hold the power to choose how to ride waves of time. The pixels, which represent time units, are liquified and reborn into new shapes and shades.',
  },
  {
    url: 'https://storage.opensea.io/files/e27358c503e08a6b9896782a4761b3c2.mp4#t=0.001',
    author: ['N!q'],
    twitter: ['https://twitter.com/1percentNiq'],
    title: 'LuckyMask 生肖一刻值千金',
    platform: 'OpenSea',
    platformLink:
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/50607888083714916310772034386603713942255032774816121732233382217531961376769',
    type: 'video',
    desc: `《LuckyMask 生肖一刻值千金》是致敬圆明园十二生肖兽首铜像的数字生成作品，时长十五分钟，每一秒都会生成12*2个数字生成金色生肖兽首。作品中包含了子时(鼠)、丑时(牛)、寅时(虎)、卯时(兔)、辰时(龙)、巳时(蛇)、午时(马)、未时(羊)、申时(猴)、酉时(鸡)、戌时(狗)、亥时(猪)，总共12款面具主题，在一定范围的随机性内，一分钟共生成了1440个面具。
    在当年十二生肖铜像曾被时人称为“水力钟”。每日，十二生肖铜像会依次轮流喷水，分别代表全日不同时分，后来由于战乱流失海外。如今我使用数字与算法手段再创作，将生成渲染的帧映射到现实一分钟的每一秒，再现其展现时间流逝的功用。
    作品生成基于“柏林噪声”的算法模式，它的变化趋势是随机但又具有连续性的。在计算机图形领域常常用于模拟许多大规模场景生成，例如地形、建筑和植被等。
    作品同样是映射了我的个人经历，从古董到数字，对应着我在元宇宙中觉醒自我，从传统设计领域转向了数字创作领域。
    这幅作品是LuckyCot Beast Friends系列的起源象征艺术品。在项目启动之时，收藏家将会收到到编号为#1~#12的作品。LuckyCot Beast Friends是3D艺术家Niq继Luckycot100之后的全新系列，将会是一系列AR/VR预备的3d格式的元宇宙面具Avatar作品，其创作将通过生成+VR绘制的方式进行。
    `,
  },
  {
    url: 'https://mkpcdn.com/videos/d833a76ed61c8fb08c66e7a3a37021ea_648507.mp4',
    author: ['Reva'],
    twitter: ['https://twitter.com/Reva_fyw'],
    title: 'Starlike Inspirations 如星的灵感',
    platform: 'makersplace',
    platformLink: 'https://makersplace.com/vulcandao/starlike-inspirations-1-of-1-79089/',
    type: 'video',
    desc: `The inspiration is like a sudden spark lit a star.
    The stars lit up each other and spread into a universe of thoughts.
    What if we try to squeeze or fold the universe?
    Maybe it will burst out a great idea.
    
    All images of this work are generated from fractal functions.
    BGM by Eric Yang.`,
  },
  {
    url: 'https://storage.opensea.io/files/91c3f9c2c033a5df9ce39c9f294c85a2.mp4#t=0.001',
    author: ['Riniifish'],
    twitter: ['https://twitter.com/riniifish'],
    title: 'Crew',
    platform: 'OpenSea',
    platformLink:
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/44442949386796894431554556088612716344816748171023677202865271269590562766849',
    type: 'video',
    desc: `Crew, a group of tiny independent light-sensitive tissues, are very sensitive to light. While the sun looks like it's always on to humans, to the bugs, it seems like a constant source of light that is bright and dim and not very stable.`,
  },
  {
    url: 'https://storage.opensea.io/files/39837aa0a5d1686f3f8d7b0f93afb49e.mp4#t=0.001',
    author: ['Sleepy'],
    twitter: ['https://twitter.com/0x13BlockBeats'],
    title: 'The Flower',
    platform: 'OpenSea',
    platformLink:
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/30133713994736285132554688158522241961977932724826138760527358180941444939777?assetContractAddress=0x495f947276749ce646f68ac8c248420045cb7b5e&tokenId=30133713994736285132554688158522241961977932724826138760527358180941444939777',
    type: 'video',
    desc: `The Flower Generative art by Sleepy. About beauty, about love, about radiance, about dreams, about life. 花儿，Sleepy的生成艺术作品，关于美、关于爱、关于璀璨、关于梦想、关于生命。
    `,
  },
  {
    url: 'https://storage.opensea.io/files/b631caa78c71bd963f331d7f34eef6bf.png',
    author: ['TingSong'],
    twitter: ['https://twitter.com/Song11Ting'],
    title: 'Cyber Wonder Woman',
    platform: 'OpenSea',
    platformLink: 'https://opensea.io/assets/0x4690b1efab2ea1232fb95a89e175abd3331b0f62/5',
    type: 'image',
    desc: `"Cyber Wonder Woman" was identified as conditional class probability 0.80-0.85 as a real woman. We have really set a “Cyber wonder woman” in the cyber world.《Cyber Wonder Woman》是基于区块链的、AI 生成的中国科技女性力量数字雕塑。作品希望所有卓越的科技女性，实现自己 的梦想。`,
  },
  {
    url: 'https://lh3.googleusercontent.com/pNys7eUxGkJpUcVwiE5mf_xy8m8a9DRcRtdpV7ixscTaDTgfj9AONnETwM1tAwT9ujX-Ls7N99Q4zTejRKnGnEubVZ4OUMa2Xp0XWA=w600',
    author: ['Tonran'],
    twitter: ['https://twitter.com/Tonran1'],
    title: 'Children of space',
    platform: 'OpenSea',
    platformLink:
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/37724347662963635848339696881091927783627379649293885295953155393587333038081/',
    type: 'image',
    desc: 'Sleeping... waiting for the moment of awakening.',
  },
  {
    url: 'https://assets.foundation.app/Er/1U/QmdKnHMGp1f3c8UY18ZbnVP5VH1A7po8HK3ZRM6hNTEr1U/nft_q4.mp4',
    author: ['Xix'],
    twitter: ['https://twitter.com/xix2033'],
    title: `Avatar's way of death 庄⼦叹骷髅`,
    platform: 'Foundation',
    platformLink: 'https://foundation.app/@xix/r-avatar-s-way-of-death-r-86959',
    type: 'video',
    desc: `Zhuangzi sleeps with the skull is a story from "Zhuangzi · Outer chapters". The artist quoted this story to discuss the relationship between the diversity of Avatar and the death of virtual identities.
    The work will be sold in two editions. Artists confuse the value of groups and individuals by bidding greatly differently.
    
    庄子叹骷髅是出自《庄子·外篇》的一个故事，艺术家引用这个故事旨在探讨Avatar身份的多样性和虚拟身份死亡的关系。
    作品将会有两个版本出售，艺术家通过差异极大出价，混淆群体价值和个人价值。`,
  },
];

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
