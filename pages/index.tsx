import React from 'react';
import classnames from 'classnames';
import { useTranslations } from 'next-intl';

import Page from '../components/page';
import Layout from '../components/layout';
import H2 from '../components/h2';
import { SITE_NAME, META_DESCRIPTION } from '../common/const';

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
  const t = useTranslations('index');

  return (
    <Page meta={meta} className={styles.bg}>
      <Layout className={cls}>
        <H2>{t('welcome')}</H2>
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
