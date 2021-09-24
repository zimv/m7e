import React from 'react';
import classnames from 'classnames';
import { useTranslations } from 'next-intl';
import ReactPlayer from 'react-player';

import Page from '../page';
import Layout from '../layout';
import Gallery from '../gallery';
import { SITE_NAME, META_DESCRIPTION } from '../../common/const';

import MagicCard from '../magic-card';
import Button from '../button';
import ImageGallery from '../image-gallery';
import VideoSlider from '../slider';
import Web3Wallet from '../web3-wallet';
import CollectWallet from '../web3-wallet/collect-wallet';

import network from '../../biz/event/moca/network.json';

import GlowingButton from '../glowing-button';

import styles from '../../styles/event/moca.module.css';

const slideData = [
  {
    index: 0,
    headline: 'New Fashion Apparel',
    button: '查看详情',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg',
    author: '@joshuamiller',
    extral: '查看更多作品',
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: '查看详情',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
    author: 'John',
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    button: 'Listen',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg',
    author: 'Muse',
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    button: '查看详情',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
    author: '作家',
  },
];

const videoList = [
  {
    video: '/video/moca.mp4',
    image:
      'https://images.unsplash.com/photo-1614983646436-b3d7a8398b3f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTU4MTkxNA&ixlib=rb-1.2.1&q=80&w=400&h=600',
    title: 'Colborn',
    description: 'MOCA',
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

export default function Index() {
  const [videoSrc, setVideoSrc] = React.useState(videoList[0].video);

  const t = useTranslations('event.moca');

  const meta = {
    title: `${t('title')} - ${SITE_NAME}`,
    description: META_DESCRIPTION,
  };

  const onVideoChange = React.useCallback(
    (idx, dataSource) => {
      setVideoSrc(dataSource[idx].video);
    },
    [null],
  );

  return (
    <Page meta={meta}>
      <Layout fixed headerBgCls="bg-black" extra={<CollectWallet network={network} />}>
        <Web3Wallet network={network} />
        {/* style={{ background: `url(/images/event-moca-cover.jpg) center center / cover no-repeat` }} */}
        <section className="relative">
          {/* <ReactPlayer
            muted
            loop
            playing
            width="100%"
            height="100%"
            url="/video/moca.mp4"
            className="w-full h-full absolute"
            style={{ zIndex: -1, background: '#000' }}
          /> */}
          <div
            style={{ zIndex: -1, background: '#000' }}
            className="w-full h-full absolute flex justify-center items-center"
          >
            <img src="/video/moca.gif" />
          </div>
          <div
            className="main-content min-h-screen	w-full flex"
            style={{ background: 'transparent' }}
          >
            <div className="min-h-screen h-full flex-1	flex flex-col	justify-center	 ">
              <h1 className="text-gray-50 text-6xl font-semibold fonts-kumar-one">
                Awaking of the Self
              </h1>
              <h3 className="text-gray-100 text-4xl mt-8 font-light	fonts-kumar-one">
                Quest for Metaverse Identity
              </h3>
              <h1 className="text-gray-50 text-6xl mt-10 font-semibold">自我的觉醒</h1>
              <h3 className="text-gray-100 text-4xl mt-8 font-light	">探寻元宇宙身份</h3>
              <h4 className="text-gray-200 text-xl mt-16 font-thin	">09 - 15, September, 2021</h4>
              <h4 className="text-gray-200 text-xl mt-4 font-thin	">2021 年 9 月 9 至 15 日</h4>
              {/* 
              <h1 className="text-gray-50 text-6xl font-semibold">{t('title')}</h1>
              <h3 className="text-gray-100 text-4xl mt-8 font-light	">{t('subtitle')}</h3>
            <h4 className="text-gray-200 text-xl mt-16 font-thin	">{t('date')}</h4> */}
            </div>
            <div className="flex flex-1 justify-end items-center">
              <div className="flex flex-col	">
                {/* <MagicCard>
                  <img src="https://storage.yandexcloud.net/printio/assets/realistic_views/tee/large/7ac8cb4ca656e5d273786b03514e4015334c391a.jpg?1627575812" />
                </MagicCard> */}
                {/* <button className={classnames('mt-8 rounded-2xl	h-8', 'magic-bg', 'text-white')}>Claim</button> */}
                {/* <GlowingButton className={classnames('mt-8 ')}>Claim</GlowingButton> */}
              </div>
            </div>
          </div>
        </section>

        <section className={styles['section-video']}>
          <div className="main-content ">
            <ReactPlayer
              controls
              width="100%"
              height="100%"
              url={videoSrc || '/video/moca.mp4'}
              className="w-full h-full rounded-2xl overflow-hidden"
            />
            <VideoSlider title="视频列表" dataSource={videoList} onChange={onVideoChange} />
          </div>
        </section>

        <section className={styles.gallery}>
          <Gallery heading="Example Slider" slides={slideData} />
        </section>
      </Layout>
    </Page>
  );
}

export async function getStaticProps(context) {
  const { locale = 'zh-CN' } = context;
  return {
    props: {
      messages: {
        ...require(`../../messages/common/${locale}.json`),
        ...require(`../../messages/event/${locale}.json`),
      },
      now: new Date().getTime(),
      locale,
    },
  };
}
