import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import PageTitle from '../../components/page-title';
import PartnerCard from '../../components/partner-card';
import PartersBG from '../../public/images/partners-bg-01.svg';
import avatar from '../../public/partners-logo/unnamed.jpeg';
import avatar1 from '../../public/partners-logo/unnamed1.png';
import avatar2 from '../../public/partners-logo/unnamed2.png';
import avatar3 from '../../public/partners-logo/unnamed3.png';
import avatar4 from '../../public/partners-logo/unnamed4.jpeg';
import avatar5 from '../../public/partners-logo/unnamed5.jpeg';
import avatar6 from '../../public/partners-logo/unnamed6.png';
import avatar7 from '../../public/partners-logo/unnamed7.png';
import avatar8 from '../../public/partners-logo/unnamed8.jpeg';
import avatar9 from '../../public/partners-logo/unnamed9.png';

import styles from './index.module.less';

export default function partnersPartners() {
  const [pbCls, setPbCls] = useState('');
  useEffect(() => {
    const newPbCls = classnames(
      window.screen.width > window.screen.height ? 'w-full' : 'h-full',
      'absolute',
    );
    setPbCls(newPbCls);
  }, []);
  const cls = classnames('flex justify-between items-center flex-wrap', styles.container);

  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-black">
      <PartersBG className={pbCls} />
      <PageTitle title="Partners" />
      <div className={cls}>
        <PartnerCard logo={avatar} link={''} name="logo" />
        <PartnerCard logo={avatar1} link={''} name="logo" />
        <PartnerCard logo={avatar2} link={''} name="logo" />
        <PartnerCard logo={avatar3} link={''} name="logo" />
        <PartnerCard logo={avatar4} link={''} name="logo" />
        <PartnerCard logo={avatar5} link={''} name="logo" />
        <PartnerCard logo={avatar6} link={''} name="logo" />
        <PartnerCard logo={avatar7} link={''} name="logo" />
        <PartnerCard logo={avatar8} link={''} name="logo" />
        <PartnerCard logo={avatar9} link={''} name="logo" />
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}
