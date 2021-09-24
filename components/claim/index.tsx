import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import Collapsible from 'react-collapsible';
import classnames from 'classnames';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import VideoBg from '../../public/images/claim-bg.svg';
import LeftArrow from '../../public/images/left-arrow.svg';
import RightArrow from '../../public/images/right-arrow.svg';
import down from '../../public/images/down.svg';
import left from '../../public/images/left.svg';

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
  {
    type: 'image',
    image: '/images/mirror-world.png',
    title: '9.24',
    link: 'https://forms.gle/a47psKUcrSSiVveS6',
    linkString: 'Mirror World',
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

const CollapseItem = ({ question, children, openIndex, onToggle, index }) => {
  const active = openIndex === index;

  const onToggleHandler = React.useCallback(() => {
    onToggle(active ? -1 : index);
  }, [onToggle, index, active]);

  const Header = (
    <div
      className={classnames('flex w-full items-center px-2 sm:px-4 cursor-pointer', {
        'text-black': active,
        'text-white': !active,
      })}
      onClick={onToggleHandler}
    >
      <span className="text-2xl sm:text-2xl 2xl:text-4xl mr-4 font-kumar-one">0{index}</span>
      <div className="flex items-end flex-1">
        <span className="text-base sm:text-xl 2xl:text-2xl flex-1 sm:-mb-1 2xl:-mb-2 font-light leading-normal font-normal	">
          {question}
        </span>
      </div>
      <img style={{ width: 16, height: 10 }} src={active ? down : left} />
    </div>
  );

  return (
    <Collapsible
      trigger={Header}
      className={classnames('text-white py-2 sm:py-4', styles['border-bottom'], {
        [styles['no-border']]: active || openIndex - index === 1,
      })}
      openedClassName={classnames(styles['collapse-high'], 'rounded-lg py-2 sm:py-4')}
      open={active}
    >
      <div
        className={classnames(
          'pl-12 sm:pl-16 2xl:pl-20 pt-4 sm:pt-4 text-sm sm:text-lg 2xl:text-xl font-light',
          {
            'text-black': active,
            'text-white': !active,
          },
        )}
      >
        {children}
      </div>
    </Collapsible>
  );
};

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

      {/* {
        videoList.map((item, index) => {
          return (
            <CollapseItem
              key={index}
              question={item.title}
              openIndex={-1}
              onToggle={() => {}}
              index={index}
            >
              <div className={styles.text}>{item.question}</div>
            </CollapseItem>
          );
        })
      } */}
    </div>
  );
}
