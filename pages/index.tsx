import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import MobileDetect from 'mobile-detect';
import classnames from 'classnames';
import { useTranslations } from 'next-intl';
import Page from '../components/page';
import NavBox from '../components/nav-box';
import Menu from '../components/menu-carousel';
import Moca from '../components/moca';
import { useWalletProvider } from '../components/web3modal';
import Videos from '../components/videos';
import Partners from '../components/partners';
import Speakers from '../components/speakers';
import Claim from '../components/claim';
import Activity1 from '../components/activity1';
import Activity2 from '../components/activity2';
import PreMoca from '../components/pre-moca';
import Schedule from '../components/schedule';
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

interface Props {
  userAgent?: string;
}
const Home: NextPage<Props> = ({ userAgent }) => {
  const md = new MobileDetect(userAgent);
  const isM = !!md.mobile();
  const tNavigation = useTranslations('navigation');
  const { connect, data } = useWalletProvider();

  const meta = {
    title: `${tNavigation('home')} - ${SITE_NAME}`,
    description: META_DESCRIPTION,
  };

  const [menuActive, setMenuActive] = useState(false);
  const [blockContro, setBlockContro] = useState(false);
  const [isMobile, setMobile] = useState(isM);
  const [mobileStyle, setMobileStyle] = useState(isM);
  const [tab, setTab] = useState(isM);
  const [activeTab, setActiveTab] = useState('');
  const [menuLinkIndex, setMenuLinkIndex] = useState(0);
  const getStyle = (block) => {
    if (block === 'blockBlack' && activeTab !== '') return styles.blockBlackNone;
    if (activeTab === block) return styles.activeTab;
    if (tab) return styles.tab;
    return '';
  };

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

  const onClaim = React.useCallback(() => {
    // if (!data.address) {
    //   if (connect) {
    //     connect();
    //   }

    //   // eslint-disable-next-line no-useless-return
    //   return;
    // }

    // TODO: redirect
    // window.alert('Comming soon');
    // Airdrop 1
    // window.open('https://magic.goatnft.io');
    setTab(true);
    setActiveFun('block5');
  }, [connect, data]);

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

  const Text1 = <span className={styles.nav1}>Highlights</span>;
  const Text2 = <span className={styles.nav1}>MOCA Exhibition</span>;
  const Text3 = <span className={styles.nav2}>VIPs</span>;
  const Text4 = <span className={styles.nav2}>Partners</span>;

  const menuItem = (
    <>
      <div className={styles['menu-title']}>Sept 15 ~ Oct 28</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        NFT Airdrop & Claim on M7E.SH
      </div>
    </>
  );
  const menuItem1 = (
    <>
      <div className={styles['menu-title']}>Oct 22 ~ 28</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        MOCA Exhibition in Metaverse, M7E.SH, Twittersphere and M50 Shanghai
      </div>
    </>
  );
  const menuItem2 = (
    <>
      <div className={styles['menu-title']}>Oct 24 ~ 28</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        NFT Scavenger Hunt in Shanghai
      </div>
    </>
  );
  const menuItem3 = (
    <>
      <div className={styles['menu-title']}>Oct 22</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        ideaPod the Bund House Shanghai
      </div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        Opening Forum: Quest for Metaverse Identity
      </div>
    </>
  );
  const menuItem4 = (
    <>
      <div className={styles['menu-title']}>Oct 23</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        AM, M50 Innovation+ Space Shanghai Harmony Meetup: When Shanghai meets Silicon Valley in
        Metaverse
      </div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        PM, M50 Innovation+ Space Shanghai
      </div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        NFT Avatar Carnival
      </div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        Night, M50 Innovation+ Space Shanghai Polygon Ecosystem Metaverse Night
      </div>
    </>
  );

  const menuItem5 = (
    <>
      <div className={styles['menu-title']}>Oct 24</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        M50 Innovation+ Space Shanghai
      </div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        Nash Metaverse: 4X-Inception Exhibition
      </div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        Night, ideaPod the Bund House Shanghai Metaverse Cocktail: Quest for Metaverse Identity by
        MyCrptoProfile & Dataverse
      </div>
    </>
  );
  const menuItem6 = (
    <>
      <div className={styles['menu-title']}>Oct 28</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        Night, Metaverse
      </div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        Closing Party
      </div>
    </>
  );
  const menuItem7 = (
    <>
      <div className={styles['menu-title']}>Sept 29 ~ Nov 21</div>
      <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
        Suzhou Hanshan Art Museum Exhibition：Avatar, My Metaverse
      </div>
    </>
  );

  return (
    <Page meta={meta} className={styles.bg}>
      <div
        className={classnames({
          [styles.menu]: isMobile,
        })}
      >
        <div
          className={classnames({
            [styles.icon]: true,
          })}
          onClick={() => {
            if (menuActive) {
              setMenuActive(!menuActive);
              setTimeout(() => {
                setBlockContro(!blockContro);
              }, 300);
            } else {
              setBlockContro(!blockContro);
              setTimeout(() => {
                setMenuActive(!menuActive);
              }, 0);
            }
          }}
        >
          <div
            className={classnames({
              [styles.active]: menuActive,
            })}
          >
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
        <div
          className={classnames({
            [styles.menuItems]: true,
            [styles.active]: menuActive,
            [styles.blockContro]: blockContro,
          })}
        >
          <div
            onClick={() => {
              setActiveTab('');
              setMenuActive(false);
              setBlockContro(false);
            }}
          >
            Home
          </div>
          <div
            onClick={() => {
              setActiveTab('block2');
              setMenuActive(false);
              setBlockContro(false);
            }}
          >
            MOCA Exhibition
          </div>
          <div
            onClick={() => {
              setActiveTab('block1');
              setMenuActive(false);
              setBlockContro(false);
            }}
          >
            Highlights
          </div>
          <div
            onClick={() => {
              setActiveTab('block6');
              setMenuActive(false);
              setBlockContro(false);
            }}
          >
            Schedule
          </div>
          <div
            onClick={() => {
              setActiveTab('block3');
              setMenuActive(false);
              setBlockContro(false);
            }}
          >
            VIPs
          </div>
          <div
            onClick={() => {
              setActiveTab('block4');
              setMenuActive(false);
              setBlockContro(false);
            }}
          >
            Partners
          </div>
          <div
            onClick={() => {
              setActiveTab('block5');
              setMenuActive(false);
              setBlockContro(false);
            }}
          >
            Airdrop
          </div>
        </div>
      </div>
      <div className={styles.blockWrap}>
        {tab && activeTab !== '' && !isMobile ? (
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
            [styles.mob]: isMobile,
            [styles.activeStyle]: activeTab === 'block1',
          })}
          onClick={() => setActiveFun('block1')}
        ></div>
        <div className={classnames(styles.blockBlack, styles.blockBlackNone)}></div>
        <div
          className={classnames({
            [styles.block2]: true,
            [styles.tab]: tab,
            [styles.mob]: isMobile,
            [styles.activeStyle]: activeTab === 'block2',
          })}
          onClick={() => setActiveFun('block2')}
        ></div>
        <div
          className={classnames({
            [styles.block3]: true,
            [styles.tab]: tab,
            [styles.mob]: isMobile,
            [styles.activeStyle]: activeTab === 'block3',
          })}
          onClick={() => setActiveFun('block3')}
        ></div>
        <div
          className={classnames({
            [styles.block4]: true,
            [styles.tab]: tab,
            [styles.mob]: isMobile,
            [styles.activeStyle]: activeTab === 'block4',
          })}
          onClick={() => setActiveFun('block4')}
        ></div>
        <div
          className={classnames({
            [styles.block5]: true,
            [styles.tab]: tab,
            [styles.mob]: isMobile,
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
              HIGHLIGHTS
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
              VIPs
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
              AIRDROP
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
                iconComponent={<Icon3 width="1.2rem" height="1.2rem" />}
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
                    {/* {data.address ? 'Airdrop' : 'Connect'} */}
                    Airdrop
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
                iconComponent={<Icon2 width="1.5rem" height="1.6rem" />}
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
                iconComponent={<Icon4 width="0.4rem" height="0.4rem" />}
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
                iconComponent={<Icon1 width="0.5rem" height="0.5rem" />}
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
                <Menu.CarouselItem>{menuItem}</Menu.CarouselItem>
                <Menu.CarouselItem>{menuItem7}</Menu.CarouselItem>
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
              {/* {activeTab === 'block2' ? <Moca backCall={backCall} /> : ''} */}
              <PreMoca></PreMoca>
            </div>
            <div className={classnames(styles.page, activeTab === 'block3' ? styles.show : '')}>
              <Speakers />
            </div>
            <div className={classnames(styles.page, activeTab === 'block4' ? styles.show : '')}>
              <Partners />
            </div>
            <div className={classnames(styles.page, activeTab === 'block5' ? styles.show : '')}>
              <Claim />
            </div>
            <div className={classnames(styles.page, activeTab === 'block6' ? styles.show : '')}>
              <Schedule />
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
            style={{ width: '5.28rem', height: '4.76rem', background: '#A06CD5' }}
          >
            <NavBox textComponent={Text2} iconComponent={<Icon2 />} />
          </div>
        </div>
      </div>

      <div className="fixed text-3xl text-white" style={{ bottom: 24, right: 24 }}>
        Powered by <a href="http://nft4metaverse.io/">NFT4Metaverse</a>
      </div>
    </Page>
  );
};

// export async function getStaticProps({ locale = 'zh-CN' }) {
//   return {
//     props: {
//       messages: {
//         ...require(`../messages/common/${locale}.json`),
//         ...require(`../messages/index/${locale}.json`),
//       },
//       now: new Date().getTime(),
//       locale,
//     },
//   };
// }

Home.getInitialProps = async ({ req }) => {
  const locale = 'zh-CN';
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return {
    userAgent,
    messages: {
      ...require(`../messages/common/${locale}.json`),
      ...require(`../messages/index/${locale}.json`),
    },
    now: new Date().getTime(),
    locale,
  };
};

export default Home;
