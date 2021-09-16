import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useTranslations } from 'next-intl';
import Page from '../components/page';
import NavBox from '../components/nav-box';
import Menu from '../components/menu-carousel';
import Moca from '../components/moca';
import { useWalletProvider } from '../components/web3modal';
import Videos from './videos';
import Partners from './partners';
import Speakers from './speakers';
import Activity1 from './activity1';
import Activity2 from './activity2';
import PreMoca from './pre-moca';
import { SITE_NAME, META_DESCRIPTION } from '../common/const';
import Icon1 from '../public/images/icon_1.svg';
import Icon2 from '../public/images/icon_2.svg';
import Icon3 from '../public/images/icon_3.svg';
import Icon4 from '../public/images/icon_4.svg';
import Flower1 from '../public/images/flower1.svg';
import Flower2 from '../public/images/flower2.svg';
import HomeBg from '../public/images/home-bg.svg';
import Ball2 from '../public/images/ball2.svg';

import styles from '../styles/index.module.less';

export default function Home() {
  const tNavigation = useTranslations('navigation');
  const { connect, data } = useWalletProvider();

  const [isMobile, setMobile] = useState(false);
  const [mobileStyle, setMobileStyle] = useState(false);
  const [tab, setTab] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [menuLinkIndex, setMenuLinkIndex] = useState(0);
  const getStyle = (block) => {
    if (block === 'blockBlack' && activeTab !== '') return styles.blockBlackNone;
    if (activeTab === block) return styles.activeTab;
    if (tab) return styles.tab;
    return '';
  };

  const onClaim = React.useCallback(() => {
    if (!data.address) {
      if (connect) {
        connect();
      }

      // eslint-disable-next-line no-useless-return
      return;
    }

    // TODO: redirect
    window.alert('Comming soon');
  }, [connect, data]);

  useEffect(() => {
    const mobile = (window.innerWidth || document.body.clientWidth) < 640;
    setMobile(mobile);
    setMobileStyle(mobile);
    // if mobile tab:true
    setTab(mobile);
  }, []);

  const setActiveFun = (block) => {
    if (isMobile) {
      setActiveTab(block);
      setMobileStyle(false);
    } else {
      setActiveTab(block);
    }
  };

  const meta = {
    title: `${tNavigation('home')} - ${SITE_NAME}`,
    description: META_DESCRIPTION,
  };

  const backCall = () => {
    if (isMobile) {
      setMobileStyle(true);
      setActiveTab('');
    } else {
      setTab(false);
      setActiveTab('');
    }
  };

  function menuItemClick(index) {
    // setMenuLinkIndex(index);
    // setTab(true);
    // setActiveTab('block5');
  }

  function renderMenu() {
    let node;
    switch (menuLinkIndex) {
      case 0:
        node = <Activity1 />;
        break;
      case 1:
        node = <Activity2 />;
        break;
      default:
        node = null;
    }
    return node;
  }

  const Text1 = <span className={styles.nav1}>Videos</span>;
  const Text2 = <span className={styles.nav1}>MOCA Exhibition</span>;
  const Text3 = <span className={styles.nav2}>Speakers</span>;
  const Text4 = <span className={styles.nav2}>Partners</span>;

  const menuItem1 = (
    <>
      <div className={styles['menu-title']}>Sept 15 ~ Oct 28</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        NFT Airdrop & Claim on M7E.SH
      </div>
    </>
  );
  const menuItem2 = (
    <>
      <div className={styles['menu-title']}>Oct 22 ~ 28</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        MOCA Exhibition in Metaverse, M7E.SH, Twittersphere and M50 Shanghai
      </div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        Pubs in Shanghai NFT Scavenger Hunt
      </div>
    </>
  );
  const menuItem3 = (
    <>
      <div className={styles['menu-title']}>Oct 22</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        9:30 ~ 16:30 ideaPod the Bund House Shanghai Opening Forum: Quest for Metaverse Identity
      </div>
    </>
  );
  const menuItem4 = (
    <>
      <div className={styles['menu-title']}>Oct 23</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        10:00 ~ 12:00 M50 Innovation+ Space Shanghai Harmony Meetup: When Shanghai meets Silicon
        Valley in Metaverse
      </div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        13:30 ~ 17:30 M50 Innovation+ Space Shanghai NFT Avatar Carnival
      </div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        18:30 ~ 21:30 M50 Innovation+ Space Shanghai Salon: Polygon and their NFT ecosystem
      </div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        10:00 ~ 18:00 M50 Innovation+ Space Shanghai Nash Metaverse Festival
      </div>
    </>
  );

  const menuItem5 = (
    <>
      <div className={styles['menu-title']}>Oct 24</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        18:00 ~ 22:00 ideaPod the Bund House Shanghai Metaverse Cocktail: Quest for Metaverse
        Identity by MyCrptoProfile & Dataverse
      </div>
    </>
  );
  const menuItem6 = (
    <>
      <div className={styles['menu-title']}>Oct 28</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        19:00 ~ 21:00 Metaverse Closing: Electronic Music Party
      </div>
    </>
  );

  return (
    <Page meta={meta} className={styles.bg}>
      <div className={styles.blockWrap}>
        {tab && activeTab !== '' ? (
          <div className={styles.back} onClick={backCall}>
            <img src="/images/back-ic.png" />
            Back
          </div>
        ) : (
          ''
        )}
        <div
          className={classnames({
            [styles.block1]: true,
            [styles.tab]: tab,
            [styles.activeStyle]: activeTab === 'block1',
          })}
          onClick={() => setActiveFun('block1')}
        ></div>
        <div className={classnames(styles.blockBlack, styles.blockBlackNone)}></div>
        <div
          className={classnames({
            [styles.block2]: true,
            [styles.tab]: tab,
            [styles.activeStyle]: activeTab === 'block2',
          })}
          onClick={() => setActiveFun('block2')}
        ></div>
        <div
          className={classnames({
            [styles.block3]: true,
            [styles.tab]: tab,
            [styles.activeStyle]: activeTab === 'block3',
          })}
          onClick={() => setActiveFun('block3')}
        ></div>
        <div
          className={classnames({
            [styles.block4]: true,
            [styles.tab]: tab,
            [styles.activeStyle]: activeTab === 'block4',
          })}
          onClick={() => setActiveFun('block4')}
        ></div>
        <div
          className={classnames({
            [styles.block5]: true,
            [styles.tab]: tab,
            [styles.activeStyle]: activeTab === 'block5',
          })}
          onClick={() => setActiveFun('block5')}
        ></div>

        {!isMobile ? (
          <>
            <div
              className={classnames({
                [styles.tag1]: true,
                [styles.tab]: tab,
              })}
              onClick={() => setActiveFun('block1')}
            >
              VIDEO
            </div>
            <div
              className={classnames({
                [styles.tag2]: true,
                [styles.tab]: tab,
              })}
              onClick={() => setActiveFun('block2')}
            >
              MOCA
            </div>
            <div
              className={classnames({
                [styles.tag3]: true,
                [styles.tab]: tab,
              })}
              onClick={() => setActiveFun('block3')}
            >
              SPEAKER
            </div>
            <div
              className={classnames({
                [styles.tag4]: true,
                [styles.tab]: tab,
              })}
              onClick={() => setActiveFun('block4')}
            >
              PARTNER
            </div>
            <div
              className={classnames({
                [styles.tag5]: true,
                [styles.tab]: tab,
              })}
              onClick={() => setActiveFun('block5')}
            >
              MOCA
            </div>
          </>
        ) : (
          ''
        )}

        <div className={styles.blockWrap}>
          <div
            className={classnames(styles.block1, getStyle('block1'), styles.con)}
            onClick={() => {
              setTab(true);
              setActiveTab('block1');
            }}
          >
            <div className={styles.mini} style={{ width: '100%', height: '100%' }}>
              <NavBox
                textComponent={Text1}
                iconComponent={<Icon3 width="120rem" height="120rem" />}
              />
            </div>
          </div>
          <div
            className={classnames(
              styles.blockBlack,
              getStyle('blockBlack'),
              mobileStyle ? styles.mobile : '',
            )}
          >
            <div
              className={styles.mini}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <div className="flex flex-col justify-between flex-grow">
                <div className={styles['home-top']}>
                  <HomeBg className={styles.homeBg} />
                  <div className={styles['home-button']} onClick={onClaim}>
                    {data.address ? 'Claim NFT' : 'Connect'}
                  </div>
                  <Flower1 className={styles.flower1} />
                  <div className="flex flex-col items-end">
                    <div className={styles['home-text1']}>Shanghai Metaverse Week</div>
                    <div className={styles['home-text2']}>上海元宇宙文化周</div>
                    <div className={styles['home-text2']}>10.22 - 10.28</div>
                  </div>
                </div>
                <div className={styles['home-middle']}>
                  <div className={styles['home-text3']}>Self Awakened</div>
                  <div className={styles['home-text4']}>
                    <Flower2 className={styles.flower2} />
                    Quest for Metaverse Identity
                  </div>
                </div>
              </div>
              <div className={styles['home-bottom']}>
                <Ball2 className={styles.ball} />
              </div>
            </div>
          </div>
          <div
            className={classnames(styles.block2, getStyle('block2'), styles.con)}
            onClick={() => {
              setTab(true);
              setActiveTab('block2');
            }}
          >
            <div className={styles.mini} style={{ width: '100%', height: '100%' }}>
              <NavBox
                textComponent={Text2}
                iconComponent={<Icon2 width="150rem" height="160rem" />}
              />
            </div>
          </div>
          <div
            className={classnames(styles.block3, getStyle('block3'), styles.con)}
            onClick={() => {
              setTab(true);
              setActiveTab('block3');
            }}
          >
            <div className={styles.mini} style={{ width: '100%', height: '100%' }}>
              <NavBox
                textComponent={Text3}
                iconComponent={<Icon4 width="40rem" height="40rem" />}
              />
            </div>
          </div>
          <div
            className={classnames(styles.block4, getStyle('block4'), styles.con)}
            onClick={() => {
              setTab(true);
              setActiveTab('block4');
            }}
          >
            <div className={styles.mini} style={{ width: '100%', height: '100%' }}>
              <NavBox
                textComponent={Text4}
                iconComponent={<Icon1 width="50rem" height="50rem" />}
              />
            </div>
          </div>
          <div
            className={classnames(styles.block5, getStyle('block5'), styles.con)}
            // onClick={() => {
            //   setTab(true);
            //   setActiveTab('block5');
            // }}
          >
            <div className={styles.mini} style={{ width: '100%', height: '100%' }}>
              <Menu>
                <Menu.CarouselItem>{menuItem1}</Menu.CarouselItem>
                <Menu.CarouselItem>{menuItem2}</Menu.CarouselItem>
                <Menu.CarouselItem>{menuItem3}</Menu.CarouselItem>
                <Menu.CarouselItem>{menuItem4}</Menu.CarouselItem>
                <Menu.CarouselItem>{menuItem5}</Menu.CarouselItem>
                <Menu.CarouselItem>{menuItem6}</Menu.CarouselItem>
              </Menu>
            </div>
          </div>
        </div>

        {tab ? (
          <div
            className={classnames(
              isMobile && activeTab === '' ? styles.blockWrapPageMobile : styles.blockWrapPage,
            )}
          >
            <div className={classnames(styles.page, activeTab === 'block1' ? styles.show : '')}>
              {activeTab === 'block1' ? <Videos /> : ''}
            </div>
            <div className={classnames(styles.page, activeTab === 'block2' ? styles.show : '')}>
              {/* {activeTab === 'block2' ? <Moca backCall={backCall} />: ''} */}
              <PreMoca></PreMoca>
            </div>
            <div className={classnames(styles.page, activeTab === 'block3' ? styles.show : '')}>
              <Speakers />
            </div>
            <div className={classnames(styles.page, activeTab === 'block4' ? styles.show : '')}>
              <Partners />
            </div>
            <div className={classnames(styles.page, activeTab === 'block5' ? styles.show : '')}>
              {renderMenu()}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>

      <div className="flex">
        <div className="flex-col">
          <div
            className="flex"
            style={{ width: '528rem', height: '476rem', background: '#A06CD5' }}
          >
            <NavBox textComponent={Text2} iconComponent={<Icon2 />} />
          </div>
        </div>
      </div>
    </Page>
  );
}

export async function getStaticProps({ locale = 'zh-CN' }) {
  return {
    props: {
      messages: {
        ...require(`../messages/common/${locale}.json`),
        ...require(`../messages/index/${locale}.json`),
      },
      now: new Date().getTime(),
      locale,
    },
  };
}
