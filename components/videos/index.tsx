import React, { useState } from 'react';
import classnames from 'classnames';
import MobileDetect from 'mobile-detect';

import { Carousel } from 'antd';
import ReactPlayer from 'react-player';
import PageTitle from '../page-title';
import Bullet from '../moca/Bullet';
import Bg1 from '../../public/images/videos_bg_1.svg';

import Bg2 from '../../public/images/videos_bg_2.svg';
import styles from './index.module.less';

const videoList = [
  {
    video:
      'https://bee-6.gateway.ethswarm.org/bzz/9c0e0d6cbda6a166ac414dc9ebb905a10951cd97fa75b6dd7c364a3aa0c9772d',
    image:
      'https://images.unsplash.com/photo-1614983646436-b3d7a8398b3f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTU4MTkxNA&ixlib=rb-1.2.1&q=80&w=400&h=600',
    title: 'Shanghai Metaverse Week',
    description:
      'Self-sovereign identities and avatars are the prerequisites and first-class assets for people to enter the metaverse to work, live and play freely in future…',
  },
  {
    video:
      'http://1500006270.vod2.myqcloud.com/6c9ac477vodcq1500006270/9c51ac823701925925598037101/playlist.f9.mp4',
    title: "What's the magic between data and NFT?",
    description:
      "@JESSCATE93 @meta_Synth will share their insights and showcase Dataverse, a new #NFT curation product developed by @OwnershipLabs. Let's enjoy the 2nd talkshow on @binance live host by @cryptoroaming tonight for #ShanghaiMetaverseWeek 2021",
  },
  {
    video:
      'http://1500006270.vod2.myqcloud.com/6c9ac477vodcq1500006270/08f0c0fa3701925925300544730/playlist.f5.mp4',
    title: 'What kind of infrastructure will the Metaverse need in the future?',
    description: 'MOCA',
  },
  {
    video:
      'http://1500006270.vod2.myqcloud.com/6c9ac477vodcq1500006270/14a7ff843701925924372545542/playlist.f9.mp4',
    title: '自我的觉醒',
    description:
      "Welcome to @binance live in 30 minutes to learn what #Metaverse is and what #ShanghaiMetaverseWeek 2021 will offer. Let's scan the QR code to enjoy the interview with @cryptoroaming by @kaylawangnow CMO of @litentry @Web3Mcp!",
  },
  {
    video: '/video/moca.mp4',
    image:
      'https://images.unsplash.com/photo-1615421559287-5e6eecec3b80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTU4MjAwOQ&ixlib=rb-1.2.1&q=80&w=400&h=600',
    title: 'Suji',
    description: 'MASK',
  },
  {
    video: '/video/moca.mp4',
    image:
      'https://images.unsplash.com/photo-1615098270177-e2db45986811?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTU4MjAwOQ&ixlib=rb-1.2.1&q=80&w=400&h=600',
    title: 'Jean Chen',
    description: 'NFT4Metaverse',
  },
];

export default function Videos({ userAgent }) {
  const md = new MobileDetect(userAgent);
  const isM = !!md.mobile();
  const cls = classnames('flex flex-col justify-center items-start', styles.container);
  const shdowCls = classnames('flex flex-col justify-center items-start hidden', styles.container);
  return (
    <div
      className="relative flex justify-center items-center w-screen h-screen bg-black"
      id="video"
    >
      {isM && <PageTitle title="Highlights" subTitle="活动精选" />}
      <div className={styles.box}>
        <div className="relative">
          <Bg2 className={styles.bg2} />
          <Bg1 className={styles.bg1} />
          <div className={shdowCls}>
            <Carousel className={styles.main} dotPosition="top" dots={{ className: styles.dot }}>
              <div className={styles.video}>
                <ReactPlayer
                  controls
                  loop
                  playing
                  muted
                  width="100%"
                  height="100%"
                  url={''}
                  className="w-full h-full rounded-2xl overflow-hidden"
                />
              </div>
            </Carousel>
            <div className="flex flex-col text-left w-full">
              <div className={styles.title}>Shanghai Metaverse Week</div>
              <div className={styles.description}>
                Self-sovereign identities and avatars are the prerequisites and first-class assets
                for people to enter the metaverse to work, live and play freely in future…
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cls}>
        <Carousel className={styles.main} dotPosition="top" dots={{ className: styles.dot }}>
          {videoList.map((item) => {
            return (
              <div>
                <ReactPlayer
                  controls
                  width="100%"
                  height="480rem"
                  url={item.video}
                  className="w-full h-full rounded-2xl overflow-hidden"
                />
                <div className="flex flex-col text-left w-full mt-2">
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.description}>{item.description}</div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* <div className={styles.screen}></div> */}
      <Bullet channel="video" domId="video" />
    </div>
  );
}
