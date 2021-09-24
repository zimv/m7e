import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import VideoBg from '../../public/images/claim-bg.svg';
import LeftArrow from '../../public/images/left-arrow.svg';
import RightArrow from '../../public/images/right-arrow.svg';

import styles from './index.module.less';

const videoList = [
  {
    type: 'image',
    image: '/images/goatnft-blind-box.jpeg',
    title: '9.15',
    link: 'https://magic.goatnft.io/',
    linkString: 'MagicGOAT',
  },
  {
    type: 'image',
    image: '/images/jhxq.png',
    title: '9.24',
    link: 'https://www.evolution.land/land/5/sign-in?invite=196b6f235f',
    linkString: 'Evolution Land',
  },
  // {
  //   type: 'video',
  //   video: '/video/moca.mp4',
  //   image: '/image/logo2.png',
  //   title: '9.15',
  //   link: '/',
  //   linkString: 'GOAT NFT',
  // },
];

export default function Claim() {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-black">
      <VideoBg className={styles.container} />
      <Carousel
        className={styles.carousel}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div
              className={styles.arrow}
              onClick={onClickHandler}
              title={label}
              style={{ left: 15 }}
            >
              <LeftArrow />
            </div>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div
              className={styles.arrow}
              onClick={onClickHandler}
              title={label}
              style={{ right: 15 }}
            >
              <RightArrow />
            </div>
          )
        }
      >
        {videoList.map((item) => {
          return (
            <div className={styles.item}>
              <span className={styles.text}>{item.title}</span>
              {item.type === 'video' ? (
                <div className={styles.video}>
                  <ReactPlayer
                    controls
                    width="100%"
                    height="100%"
                    // @ts-ignore
                    url={item.video}
                    className="w-full h-full rounded-2xl overflow-hidden"
                  />
                </div>
              ) : (
                <div className={styles.video}>
                  <img width="100%" height="100" src={item.image} alt={item.title} />
                </div>
              )}
              <a
                target="_blank"
                className={styles.text}
                style={{ textDecoration: 'underline' }}
                href={item.link}
              >
                {item.linkString}
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
