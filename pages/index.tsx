import React from 'react';
import classnames from 'classnames';
import { useTranslations } from 'next-intl';
import Page from '../components/page';
import Layout from '../components/layout';
import NavBox from '../components/nav-box';
import Menu from '../components/menu-carousel';
import { SITE_NAME, META_DESCRIPTION } from '../common/const';
import Icon1 from '../public/images/icon_1.svg';
import Icon2 from '../public/images/icon_2.svg';
// import Icon3 from '../public/images/icon_3.svg';
// import Icon4 from '../public/images/icon_4.svg';
import Flower1 from '../public/images/flower1.svg';
import Flower2 from '../public/images/flower2.svg';
import Ball2 from '../public/images/ball2.svg';

import styles from '../styles/index.module.css';

export default function Home() {
  const tNavigation = useTranslations('navigation');

  const meta = {
    title: `${tNavigation('home')} - ${SITE_NAME}`,
    description: META_DESCRIPTION,
  };

  const cls = classnames(
    'main-content flex justify-center items-center	 w-full h-full',
    'pb-8',
    styles.container,
  );

  const Text1 = <span className={styles.nav1}>Videos</span>;
  const Text2 = <span className={styles.nav1}>MOCA Exhibition</span>;
  const Text3 = <span className={styles.nav2}>Speakers</span>;
  const Text4 = <span className={styles.nav2}>Partners</span>;

  return (
    <Page meta={meta} className={styles.bg}>
      <Layout className={cls}>
        <div className="flex">
          <div className="flex-col">
            <div
              className="flex"
              style={{ width: '528rem', height: '476rem', background: '#A06CD5' }}
            >
              <NavBox textComponent={Text1} iconComponent={<Icon1 />} />
              <NavBox textComponent={Text2} iconComponent={<Icon2 />} />
            </div>
            <div style={{ width: '528rem', height: '548rem', background: 'green' }}>
              <Menu />
            </div>
          </div>
          <div
            className="flex flex-col justify-between relative"
            style={{ width: '912rem', height: '100vh', background: 'black' }}
          >
            <div className="flex flex-col justify-between flex-grow">
              <div className={styles['home-top']}>
                <div className={styles['home-button']}>China NFT</div>
                <Flower1 className={styles.flower1} />
                <div className="flex flex-col items-end">
                  <div className={styles['home-text1']}>Shanghai Metaverse Week</div>
                  <div className={styles['home-text2']}>上海元宇宙文化周</div>
                  <div className={styles['home-text2']}>9.9 - 9.15</div>
                </div>
              </div>
              <div className={styles['home-middle']}>
                <Flower2 className={styles.flower2} />
                <div className={styles['home-text3']}>Self Awakened</div>
                <div className={styles['home-text4']}>Quest for Metaverse Identity</div>
                <div className={styles['home-text5']}>自我的觉醒</div>
              </div>
            </div>
            <div className={styles['home-bottom']}>
              <Ball2 className={styles.ball} />
            </div>
          </div>
        </div>
      </Layout>
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
