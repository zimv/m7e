import React from 'react';
import classnames from 'classnames';
import PageTitle from '../../components/page-title';
import Card from '../../components/logo-card';
import avatar from '../../public/partners-logo/unnamed.png';
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
  const cls = classnames(styles.container);
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-black">
      <PageTitle title="Partners" subTitle="合作方" />
      <div className={cls}>
        <div className={styles.box}>
          <h4 style={{ fontSize: '30rem' }} className="text-left text-white fonts-kumar-one mt-40">
            Event Owner
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-5">
            <Card avatar={avatar3} link={''} name="avatar" />
            <Card avatar={avatar2} link={''} name="avatar" />
            <Card avatar={avatar4} link={''} name="avatar" />
            <Card avatar={avatar5} link={''} name="avatar" />
            <Card avatar={avatar6} link={''} name="avatar" />
            <Card avatar={avatar1} link={''} name="avatar" />
            <Card avatar={avatar7} link={''} name="avatar" />
            <Card avatar={avatar8} link={''} name="avatar" />
            <Card avatar={avatar} link={''} name="avatar" />
            <Card avatar={avatar9} link={''} name="avatar" />
          </div>
        </div>
        <div className={styles.box}>
          <h4 style={{ fontSize: '30rem' }} className="text-left text-white fonts-kumar-one mt-40">
            Event Sponsors
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-5">
            <Card avatar={sponsors5} link={''} name="avatar" />
            <Card avatar={sponsors3} link={''} name="avatar" />
            <Card avatar={sponsors} link={''} name="avatar" />
            <Card avatar={sponsors8} link={''} name="avatar" />
            <Card avatar={sponsors7} link={''} name="avatar" />
            <Card avatar={sponsors4} link={''} name="avatar" />
            <Card avatar={sponsors2} link={''} name="avatar" />
            <Card avatar={sponsors9} link={''} name="avatar" />
            <Card avatar={sponsors1} link={''} name="avatar" />
            <Card avatar={sponsors10} link={''} name="avatar" />
            <Card avatar={sponsors6} link={''} name="avatar" />
          </div>
        </div>
        <div className={styles.box}>
          <h4 style={{ fontSize: '30rem' }} className="text-left text-white fonts-kumar-one mt-40">
            Event Support
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-5">
            <Card avatar={support12} link={''} name="avatar" />
            <Card avatar={support} link={''} name="avatar" />
            <Card avatar={support4} link={''} name="avatar" />
            <Card avatar={support13} link={''} name="avatar" />
            <Card avatar={support8} link={''} name="avatar" />
            <Card avatar={support18} link={''} name="avatar" />
            <Card avatar={support16} link={''} name="avatar" />
            <Card avatar={support2} link={''} name="avatar" />
            <Card avatar={support7} link={''} name="avatar" />
            <Card avatar={support9} link={''} name="avatar" />
            <Card avatar={support3} link={''} name="avatar" />
            <Card avatar={support6} link={''} name="avatar" />
            <Card avatar={support1} link={''} name="avatar" />
            <Card avatar={support11} link={''} name="avatar" />
            <Card avatar={support15} link={''} name="avatar" />
            <Card avatar={support14} link={''} name="avatar" />
            <Card avatar={support5} link={''} name="avatar" />
            <Card avatar={support17} link={''} name="avatar" />
            <Card avatar={support10} link={''} name="avatar" />
          </div>
        </div>
        <div className={styles.text}>
          <div>*The above partners are in alphabetical order and are being added...</div>
          <div>* 以上伙伴 按字母排序，并正在不断增加……</div>
        </div>
      </div>
    </div>
  );
}
