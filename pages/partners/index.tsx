import React from 'react';
import classnames from 'classnames';
import PageTitle from '../../components/page-title';
import Card from '../../components/logo-card';
import avatar from '../../public/partners-logo/new/unnamed.png';
import avatar1 from '../../public/partners-logo/new/unnamed1.png';
import avatar2 from '../../public/partners-logo/new/unnamed2.png';
import avatar3 from '../../public/partners-logo/new/unnamed3.png';
import avatar4 from '../../public/partners-logo/new/unnamed4.png';
import avatar5 from '../../public/partners-logo/new/unnamed5.png';
import avatar6 from '../../public/partners-logo/new/unnamed6.png';
import avatar7 from '../../public/partners-logo/new/unnamed7.png';
import avatar8 from '../../public/partners-logo/new/unnamed8.png';
import avatar9 from '../../public/partners-logo/new/unnamed9.png';
import sponsors from '../../public/event-sponsors/new/unnamed.png';
import sponsors1 from '../../public/event-sponsors/new/unnamed1.png';
import sponsors2 from '../../public/event-sponsors/new/unnamed2.png';
import sponsors3 from '../../public/event-sponsors/new/unnamed3.png';
import sponsors4 from '../../public/event-sponsors/new/unnamed4.png';
import sponsors5 from '../../public/event-sponsors/new/unnamed5.png';
import sponsors6 from '../../public/event-sponsors/new/unnamed6.png';
import sponsors7 from '../../public/event-sponsors/new/unnamed7.png';
import sponsors8 from '../../public/event-sponsors/new/unnamed8.png';
import sponsors9 from '../../public/event-sponsors/new/unnamed9.png';
import sponsors10 from '../../public/event-sponsors/new/unnamed10.png';
import support from '../../public/event-support/new/unnamed.png';
import support1 from '../../public/event-support/new/unnamed1.png';
import support2 from '../../public/event-support/new/unnamed2.png';
import support3 from '../../public/event-support/new/unnamed3.png';
import support4 from '../../public/event-support/new/unnamed4.png';
import support5 from '../../public/event-support/new/unnamed5.png';
import support6 from '../../public/event-support/new/unnamed6.png';
import support7 from '../../public/event-support/new/unnamed7.png';
import support8 from '../../public/event-support/new/unnamed8.png';
import support9 from '../../public/event-support/new/unnamed9.png';
import support10 from '../../public/event-support/new/unnamed10.png';
import support11 from '../../public/event-support/new/unnamed11.png';
import support12 from '../../public/event-support/new/unnamed12.png';
// import support13 from '../../public/event-support/new/unnamed13.png';
import support14 from '../../public/event-support/new/unnamed14.png';
import support15 from '../../public/event-support/new/unnamed15.png';
import support16 from '../../public/event-support/new/unnamed16.png';
import support17 from '../../public/event-support/new/unnamed17.png';
import support18 from '../../public/event-support/new/unnamed18.png';
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
            <Card avatar={avatar3} link={''} name="MOCA (Museum of Crypto Art)" />
            <Card avatar={avatar2} link={''} name="NFT4Metaverse 元宇宙特攻队" />
            <Card avatar={avatar4} link={''} name="CryptoC" />
            <Card avatar={avatar5} link={''} name="Mask Network" />
            <Card avatar={avatar6} link={''} name="Mynft" />
            <Card avatar={avatar1} link={''} name="M 360" />
            <Card avatar={avatar7} link={''} name="Blocklike" />
            <Card avatar={avatar8} link={''} name="Cryptoart.ai" />
            <Card avatar={avatar} link={''} name="Technology Art 艺数力" />
            <Card avatar={avatar9} link={''} name="Lying Gallery 躺平空间" />
          </div>
        </div>
        <div className={styles.box}>
          <h4 style={{ fontSize: '30rem' }} className="text-left text-white fonts-kumar-one mt-40">
            Event Sponsors
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-5">
            <Card avatar={sponsors5} link={''} name="DaVinci Gallery" />
            <Card avatar={sponsors3} link={''} name="GoatNFT" />
            <Card avatar={sponsors} link={''} name="Harmony" />
            <Card avatar={sponsors8} link={''} name="Litentry" />
            <Card avatar={sponsors7} link={''} name="My Crypto Profile" />
            <Card avatar={sponsors4} link={''} name="MixMarvel" />
            <Card avatar={sponsors2} link={''} name="NASH Metaverse" />
            <Card avatar={sponsors9} link={''} name="Ownership Labs" />
            <Card avatar={sponsors1} link={''} name="Polygon" />
            <Card avatar={sponsors10} link={''} name="RMRK" />
            <Card avatar={sponsors6} link={''} name="Tezos" />
          </div>
        </div>
        <div className={styles.box}>
          <h4 style={{ fontSize: '30rem' }} className="text-left text-white fonts-kumar-one mt-40">
            Event Support
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-5">
            <Card avatar={support12} link={''} name="" />
            <Card avatar={support} link={''} name="" />
            <Card avatar={support4} link={''} name="" />
            {/* <Card avatar={support13} link={''} name="" /> */}
            <Card avatar={support8} link={''} name="" />
            <Card avatar={support18} link={''} name="" />
            <Card avatar={support16} link={''} name="" />
            <Card avatar={support2} link={''} name="" />
            <Card avatar={support7} link={''} name="" />
            <Card avatar={support9} link={''} name="" />
            <Card avatar={support3} link={''} name="" />
            <Card avatar={support6} link={''} name="" />
            <Card avatar={support1} link={''} name="" />
            <Card avatar={support11} link={''} name="" />
            <Card avatar={support15} link={''} name="" />
            <Card avatar={support14} link={''} name="" />
            <Card avatar={support5} link={''} name="" />
            <Card avatar={support17} link={''} name="" />
            <Card avatar={support10} link={''} name="" />
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
