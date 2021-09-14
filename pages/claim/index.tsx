import React, { CSSProperties, useEffect, useState } from 'react';
import classnames from 'classnames';
import ReactPlayer from 'react-player';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import VideoBg from '../../public/images/videoBg.svg';

import styles from './index.module.less';

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

export default function Claim() {
  const [pbCls, setPbCls] = useState('');
  const [carouselCls, setCarouselCls] = useState('');
  useEffect(() => {
    const newPbCls = classnames(
      window.screen.width > window.screen.height ? styles.container1 : styles.container2,
    );
    const newCarouselCls = classnames(
      window.screen.width > window.screen.height ? styles.carousel1 : styles.carousel2,
    );
    setPbCls(newPbCls);
    setCarouselCls(newCarouselCls);
  }, []);

  const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 60,
    height: 60,
    cursor: 'pointer',
  };

  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-black">
      <VideoBg className={pbCls} />
      <Carousel
        className={carouselCls}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
              <ArrowLeftOutlined style={{ fontSize: '28rem', color: '#FFFFFF' }} />
            </div>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
              <ArrowRightOutlined style={{ fontSize: '28rem', color: '#FFFFFF' }} />
            </div>
          )
        }
      >
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
    </div>
  );
}
