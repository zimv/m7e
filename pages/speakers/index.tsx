import React from 'react';
import classnames from 'classnames';
import PageTitle from '../../components/page-title';
import SpeakerCard from '../../components/speaker-card';
import avatar from '../../public/speakers-logo/unnamed.jpeg';
import avatar1 from '../../public/speakers-logo/unnamed1.png';
import avatar2 from '../../public/speakers-logo/unnamed2.jpeg';
import avatar3 from '../../public/speakers-logo/unnamed3.jpeg';
import avatar4 from '../../public/speakers-logo/unnamed4.jpeg';
import avatar5 from '../../public/speakers-logo/unnamed5.jpeg';
import avatar6 from '../../public/speakers-logo/unnamed6.jpeg';
import avatar7 from '../../public/speakers-logo/unnamed7.jpeg';
import avatar8 from '../../public/speakers-logo/unnamed8.jpeg';
import avatar9 from '../../public/speakers-logo/unnamed9.jpeg';
import avatar10 from '../../public/speakers-logo/unnamed10.jpeg';
import avatar11 from '../../public/speakers-logo/unnamed11.jpeg';
import avatar12 from '../../public/speakers-logo/unnamed12.jpeg';
import avatar13 from '../../public/speakers-logo/unnamed13.png';
import avatar14 from '../../public/speakers-logo/unnamed14.png';
import avatar15 from '../../public/speakers-logo/unnamed15.jpeg';
import avatar16 from '../../public/speakers-logo/unnamed16.jpeg';
import avatar17 from '../../public/speakers-logo/unnamed17.png';
import avatar18 from '../../public/speakers-logo/unnamed18.jpeg';

import styles from './index.module.less';

export default function Speakers() {
  const cls = classnames('flex justify-between items-center flex-wrap', styles.container);
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-black">
      <PageTitle title="VIPs" />
      <div className={cls}>
        <SpeakerCard avatar={avatar} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar1} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar2} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar3} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar4} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar5} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar6} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar7} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar8} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar9} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar10} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar11} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar12} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar13} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar14} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar15} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar16} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar17} name="加拿大 CXX @ 元宇宙特攻队" />
        <SpeakerCard avatar={avatar18} name="加拿大 CXX @ 元宇宙特攻队" />
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}
