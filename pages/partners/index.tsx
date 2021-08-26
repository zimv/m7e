import React from 'react';
import classnames from 'classnames';
import PageTitle from '../../components/page-title';
import PartnerCard from '../../components/partner-card';
import PartersBG from '../../public/images/partners-bg-01.svg';
import bg1 from '../../public/images/bg1.png';

import styles from './index.module.less';

export default function partnersPartners() {
  const cls = classnames('flex justify-between items-center flex-wrap', styles.container);
  const pgCls = classnames(
    window.screen.width > window.screen.height ? 'w-full' : 'h-full',
    'absolute',
  );
  return (
    <div className="relative flex justify-center items-center w-screen min-h-screen bg-black">
      <PartersBG className={pgCls} />
      <PageTitle title="Partners" />
      <div className={cls}>
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <PartnerCard logo={bg1} link={''} name="logo" />
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}
