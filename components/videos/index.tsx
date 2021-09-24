import React, { useState } from 'react';
import classnames from 'classnames';
import { Carousel } from 'antd';
import ReactPlayer from 'react-player';
import Bullet from '../moca/Bullet';
import Bg1 from '../../public/images/videos_bg_1.svg';
import Bg2 from '../../public/images/videos_bg_2.svg';

import styles from './index.module.less';
import PageTitle from '../page-title';

const videoList = [
  {
    video:
      'https://bee-6.gateway.ethswarm.org/bzz/9c0e0d6cbda6a166ac414dc9ebb905a10951cd97fa75b6dd7c364a3aa0c9772d',
    image:
      'https://images.unsplash.com/photo-1614983646436-b3d7a8398b3f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTU4MTkxNA&ixlib=rb-1.2.1&q=80&w=400&h=600',
    title: 'Colborn',
    description: 'MOCA',
  },
  // {
  //   video: '/video/moca.mp4',
  //   image:
  //     'https://images.unsplash.com/photo-1615421559287-5e6eecec3b80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTU4MjAwOQ&ixlib=rb-1.2.1&q=80&w=400&h=600',
  //   title: 'Suji',
  //   description: 'MASK',
  // },
  // {
  //   video: '/video/moca.mp4',
  //   image:
  //     'https://images.unsplash.com/photo-1615098270177-e2db45986811?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTU4MjAwOQ&ixlib=rb-1.2.1&q=80&w=400&h=600',
  //   title: 'Jean Chen',
  //   description: 'NFT4Metaverse',
  // },
];

export default function Videos() {
  const cls = classnames('flex flex-col justify-center items-start', styles.container);
  return (
    <div
      className="relative flex justify-center items-center w-screen h-screen bg-black"
      id="video"
    >
      <PageTitle title="Video" subTitle="活动精选" />
      <div className={styles.box}>
        <div className="relative">
          <Bg2 className={styles.bg2} />
          <Bg1 className={styles.bg1} />
        </div>
      </div>
      <div className={cls}>
        <Carousel className={styles.main} dotPosition="top" dots={{ className: styles.dot }}>
          {videoList.map((item) => {
            return (
              <div className={styles.video}>
                <ReactPlayer
                  controls
                  width="100%"
                  height="100%"
                  url={item.video}
                  className="w-full h-full rounded-2xl overflow-hidden"
                />
              </div>
            );
          })}
        </Carousel>
        <div className="flex flex-col text-left w-full">
          <div className={styles.title}>Shanghai Metaverse Week</div>
          <div className={styles.description}>
            Self-sovereign identities and avatars are the prerequisites and first-class assets for
            people to enter the metaverse to work, live and play freely in future…
          </div>
        </div>
      </div>
      {/* <div className={styles.screen}></div> */}
      <Bullet channel="video" domId="video" />
    </div>
  );
}
