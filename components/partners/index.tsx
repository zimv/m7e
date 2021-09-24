import React from 'react';
import classnames from 'classnames';
import PageTitle from '../page-title';
import Card from '../logo-card';
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
import sponsors11 from '../../public/event-sponsors/new/unnamed11.png';
import sponsors12 from '../../public/event-sponsors/new/unnamed12.png';
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
import cryptomondays from '../../public/event-support/new/cryptomondays.jpeg';
import tianmo from '../../public/event-support/new/tianmo.png';
import media1 from '../../public/media-support/media1.png';
import media3 from '../../public/media-support/media3.png';
import media5 from '../../public/media-support/media5.png';
import media4 from '../../public/media-support/media4.png';
import media6 from '../../public/media-support/media6.png';
import media7 from '../../public/media-support/media7.png';
import media8 from '../../public/media-support/media8.png';
import media9 from '../../public/media-support/media9.png';
import media10 from '../../public/media-support/media10.png';
import media12 from '../../public/media-support/media12.png';
import media13 from '../../public/media-support/media13.png';
import media14 from '../../public/media-support/media14.png';
import media15 from '../../public/media-support/media15.png';
import media16 from '../../public/media-support/media16.png';
import media17 from '../../public/media-support/media17.png';
import media18 from '../../public/media-support/media18.png';
import media19 from '../../public/media-support/media19.png';
import media20 from '../../public/media-support/media20.png';
import media21 from '../../public/media-support/media21.png';
import media22 from '../../public/media-support/media22.png';
import media23 from '../../public/media-support/media23.png';
import media24 from '../../public/media-support/media24.png';
import media25 from '../../public/media-support/media25.png';
import media26 from '../../public/media-support/media26.png';
import media27 from '../../public/media-support/media27.png';
import media28 from '../../public/media-support/media28.png';
import media29 from '../../public/media-support/media29.png';
import media30 from '../../public/media-support/media30.png';

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
            <Card avatar={avatar7} link={''} name="Blocklike" />
            <Card avatar={avatar8} link={''} name="Cryptoart.ai" />
            <Card avatar={avatar9} link={''} name="CryptoC" />
            <Card avatar={avatar4} link={''} name="Lying Gallery" cnName="躺平空间" />
            <Card avatar={avatar5} link={''} name="Mask Network" />
            <Card avatar={avatar3} link={''} name="MOCA (Museum of Crypto Art)" />
            <Card avatar={avatar6} link={''} name="Mynft" />
            <Card avatar={avatar1} link={''} name="M 360" />
            <Card avatar={avatar2} link={''} name="NFT4Metaverse" cnName="元宇宙特攻队" />
            <Card avatar={avatar} link={''} name="Technology Art" cnName="艺数力" />
          </div>
        </div>
        <div className={styles.box}>
          <h4 style={{ fontSize: '30rem' }} className="text-left text-white fonts-kumar-one mt-40">
            Top Partners
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-5">
            <Card avatar={sponsors5} link={''} name="DaVinci Gallery" />
            <Card avatar={sponsors3} link={''} name="GoatNFT" />
            <Card avatar={sponsors} link={''} name="Harmony" />
            <Card avatar={sponsors8} link={''} name="Litentry" />
            <Card avatar={sponsors11} link={''} name="MetaV" />
            <Card avatar={sponsors7} link={''} name="My Crypto Profile" />
            <Card avatar={sponsors4} link={''} name="MixMarvel" />
            <Card avatar={sponsors2} link={''} name="NASH Metaverse" />
            <Card avatar={sponsors9} link={''} name="Ownership Labs" />
            <Card avatar={sponsors1} link={''} name="Polygon" />
            <Card avatar={sponsors10} link={''} name="RMRK" />
            <Card avatar={sponsors12} link={''} name="Social Future" />
            <Card avatar={sponsors6} link={''} name="Tezos" />
          </div>
        </div>
        <div className={styles.box}>
          <h4 style={{ fontSize: '30rem' }} className="text-left text-white fonts-kumar-one mt-40">
            Event Support
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-5">
            <Card avatar={support12} link={''} name="Arium" />
            <Card avatar={support} link={''} name="Binance" cnName="币安" />
            <Card avatar={support4} link={''} name="Caotai Music" cnName="草台回声" />
            <Card avatar={cryptomondays} link={''} name="Crypto Mondays" />
            <Card avatar={support8} link={''} name="Crypto Playground" />
            <Card avatar={support18} link={''} name="Decentraland" />
            <Card
              avatar={support16}
              link={''}
              name="Digital Renaissance"
              cnName="数字文艺复兴基金会"
            />
            <Card avatar={support2} link={''} name="Evolution Land" cnName="进化星球" />
            <Card avatar={support7} link={''} name="Hanshan Art Museum" cnName="寒山美术馆" />
            <Card avatar={support9} link={''} name="imToken" />
            <Card avatar={support3} link={''} name="Innovation+ Art" cnName="创+空间" />
            <Card avatar={support6} link={''} name="MetaVenturer" cnName="元宇宙探险队" />
            <Card avatar={support1} link={''} name="OG Labs" />
            <Card avatar={support11} link={''} name="OVR" />
            <Card avatar={support15} link={''} name="Sandbox" cnName="沙盒" />
            <Card avatar={support14} link={''} name="Sound Blanc" cnName="白" />
            <Card avatar={support5} link={''} name="Sssnodes" cnName="超级节点" />
            <Card avatar={support17} link={''} name="Super ACG" cnName="超次元" />
            <Card avatar={tianmo} link={''} name="Talent mart" cnName="天陌信息科技" />
            <Card avatar={support10} link={''} name="Yuanyuzhou Venture" cnName="元宇宙资本" />
          </div>
        </div>
        <div className={styles.box}>
          <h4 style={{ fontSize: '30rem' }} className="text-left text-white fonts-kumar-one mt-40">
            Media Support
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-5">
            <Card avatar={media1} link={''} name="" cnName="巴特比" />
            <Card avatar={media9} link={''} name="" cnName="币乎" />
            <Card avatar={media26} link={''} name="" cnName="币牛牛" />
            <Card avatar={media16} link={''} name="BlockBeats" cnName="区块律动" />
            <Card avatar={media7} link={''} name="BLOCK GLOBE" cnName="星空财经" />
            <Card avatar={media13} link={''} name="BroadChain Finance" cnName="博链财经" />
            <Card avatar={media12} link={''} name="CHAINDD" cnName="链得得" />
            <Card avatar={media15} link={''} name="CHAIN NEWS" cnName="链闻" />
            <Card avatar={media22} link={''} name="CHAINCATCHER" cnName="链捕手" />
            <Card avatar={media23} link={''} name="COINVOICE" cnName="" />
            <Card avatar={media28} link={''} name="" cnName="创业邦" />
            <Card avatar={media30} link={''} name="FEI NIAO COMMUNITY" cnName="飞鸟社区" />
            <Card avatar={media27} link={''} name="FIND" cnName="区分" />
            <Card avatar={media19} link={''} name="" cnName="区块链鹅探长" />
            <Card avatar={media6} link={''} name="JAZZYEAR" cnName="甲子光年" />
            <Card avatar={media5} link={''} name="" cnName="金色财经" />
            <Card avatar={media25} link={''} name="" cnName="零壹财经" />
            <Card avatar={media10} link={''} name="orangepaper" cnName="橙皮书" />
            <Card avatar={media18} link={''} name="PANews" cnName="" />
            <Card avatar={media14} link={''} name="" cnName="sina新浪" />
            <Card avatar={media17} link={''} name="" cnName="深链财经" />
            <Card avatar={media20} link={''} name="ODAILY" cnName="星球日报" />
            <Card avatar={media8} link={''} name="TANGENT" cnName="碳链价值" />
            <Card avatar={media21} link={''} name="TMTPOST" cnName="钛媒体" />
            <Card avatar={media4} link={''} name="" cnName="陀螺财经" />
            <Card avatar={media24} link={''} name="" cnName="五六财经" />
            <Card avatar={media3} link={''} name="" cnName="" />
            <Card avatar={media29} link={''} name="" cnName="" />
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
