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
import sponsors from '../../public/event-sponsors/unnamed.png';
import sponsors1 from '../../public/event-sponsors/unnamed1.png';
import sponsors2 from '../../public/event-sponsors/unnamed2.png';
import sponsors3 from '../../public/event-sponsors/unnamed3.png';
import sponsors4 from '../../public/event-sponsors/unnamed4.png';
import sponsors5 from '../../public/event-sponsors/unnamed5.png';
import sponsors6 from '../../public/event-sponsors/unnamed6.png';
import sponsors7 from '../../public/event-sponsors/unnamed7.png';
import sponsors8 from '../../public/event-sponsors/unnamed8.png';
import sponsors9 from '../../public/event-sponsors/unnamed9.png';
import sponsors10 from '../../public/event-sponsors/unnamed10.png';
import support from '../../public/event-support/unnamed.jpeg';
import support1 from '../../public/event-support/unnamed1.jpeg';
import support2 from '../../public/event-support/unnamed2.png';
import support3 from '../../public/event-support/unnamed3.png';
import support4 from '../../public/event-support/unnamed4.png';
import support5 from '../../public/event-support/unnamed5.png';
import support6 from '../../public/event-support/unnamed6.png';
import support7 from '../../public/event-support/unnamed7.png';
import support8 from '../../public/event-support/unnamed8.png';
import support9 from '../../public/event-support/unnamed9.jpeg';
import support10 from '../../public/event-support/unnamed10.png';
import support11 from '../../public/event-support/unnamed11.png';
import support12 from '../../public/event-support/unnamed12.png';
import support13 from '../../public/event-support/unnamed13.jpeg';
import support14 from '../../public/event-support/unnamed14.png';
import support15 from '../../public/event-support/unnamed15.png';
import support16 from '../../public/event-support/unnamed16.jpeg';
import support17 from '../../public/event-support/unnamed17.png';
import support18 from '../../public/event-support/unnamed18.png';
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
      <PageTitle title="Partners" />
      <div style={{ background: `url(/images/partners-bg-01.png)` }}>
        {/* <PartersBG className={pbCls} /> */}
        <div className={cls}>
          <div>
            <h4
              style={{ fontSize: '30rem' }}
              className="text-left text-white fonts-kumar-one mt-40"
            >
              Event Owner
            </h4>
            <div className="flex flex-wrap justify-between items-center">
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
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
          <div>
            <h4
              style={{ fontSize: '30rem' }}
              className="text-left text-white fonts-kumar-one mt-40"
            >
              Event Sponsors
            </h4>
            <div className="flex flex-wrap justify-between items-center">
              <PartnerCard logo={sponsors} link={''} name="logo" />
              <PartnerCard logo={sponsors1} link={''} name="logo" />
              <PartnerCard logo={sponsors2} link={''} name="logo" />
              <PartnerCard logo={sponsors3} link={''} name="logo" />
              <PartnerCard logo={sponsors4} link={''} name="logo" />
              <PartnerCard logo={sponsors5} link={''} name="logo" />
              <PartnerCard logo={sponsors6} link={''} name="logo" />
              <PartnerCard logo={sponsors7} link={''} name="logo" />
              <PartnerCard logo={sponsors8} link={''} name="logo" />
              <PartnerCard logo={sponsors9} link={''} name="logo" />
              <PartnerCard logo={sponsors10} link={''} name="logo" />
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
          <div>
            <h4
              style={{ fontSize: '30rem' }}
              className="text-left text-white fonts-kumar-one mt-40"
            >
              Event Support
            </h4>
            <div className="flex flex-wrap justify-between items-center">
              <PartnerCard logo={support} link={''} name="logo" />
              <PartnerCard logo={support1} link={''} name="logo" />
              <PartnerCard logo={support2} link={''} name="logo" />
              <PartnerCard logo={support3} link={''} name="logo" />
              <PartnerCard logo={support4} link={''} name="logo" />
              <PartnerCard logo={support5} link={''} name="logo" />
              <PartnerCard logo={support6} link={''} name="logo" />
              <PartnerCard logo={support7} link={''} name="logo" />
              <PartnerCard logo={support8} link={''} name="logo" />
              <PartnerCard logo={support9} link={''} name="logo" />
              <PartnerCard logo={support10} link={''} name="logo" />
              <PartnerCard logo={support11} link={''} name="logo" />
              <PartnerCard logo={support12} link={''} name="logo" />
              <PartnerCard logo={support13} link={''} name="logo" />
              <PartnerCard logo={support14} link={''} name="logo" />
              <PartnerCard logo={support15} link={''} name="logo" />
              <PartnerCard logo={support16} link={''} name="logo" />
              <PartnerCard logo={support17} link={''} name="logo" />
              <PartnerCard logo={support18} link={''} name="logo" />
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
