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
import avatar19 from '../../public/speakers-logo/unnamed19.png';
import avatar20 from '../../public/speakers-logo/jay_delay.png';
import avatar21 from '../../public/speakers-logo/killer_acid .png';

import styles from './index.module.less';

export default function Speakers() {
  const cls = classnames('grid grid-cols-2 lg:grid-cols-4', styles.container);
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-black">
      <PageTitle title="VIPs" />
      <div className={cls}>
        <h4
          style={{ fontSize: '30rem', fontFamily: '"Ginebra", cursive' }}
          className="text-left text-white fonts-kumar-one mt-40"
        >
          Event Owners 项目负责
        </h4>
        <span></span>
        <SpeakerCard avatar={avatar8} name="Baiwei" />
        <SpeakerCard avatar={avatar2} name="IOYOI" />
        <SpeakerCard avatar={avatar6} name="metaSynth" />
        <SpeakerCard avatar={avatar1} name="Niq" />
        <SpeakerCard avatar={avatar4} name="Reva" />
        <SpeakerCard avatar={avatar9} name="Rinii fish" />
        <SpeakerCard avatar={avatar3} name="Sleepy" />
        <SpeakerCard avatar={avatar5} name="TingSong" />
        <SpeakerCard avatar={avatar10} name="Ton ran" />
        <SpeakerCard avatar={avatar7} name="XIx" />
        <SpeakerCard avatar={avatar12} name="Arc4g" />
        <SpeakerCard avatar={avatar14} name="Debbie Digital" />
        <SpeakerCard avatar={avatar} name="Fabin Rasheed" />
        <SpeakerCard avatar={avatar16} name="Facu" />
        <SpeakerCard avatar={avatar20} name="Jay Delay" />
        <SpeakerCard avatar={avatar21} name="Killer Acid" />
        <SpeakerCard avatar={avatar18} name="Luluxx" />
        <SpeakerCard avatar={avatar19} name="Milton Sanz" />
        <SpeakerCard avatar={avatar15} name="Olive Allen" />
        <SpeakerCard avatar={avatar11} name="Rutger Van Der Tas" />
        <SpeakerCard avatar={avatar17} name="Skygolpe" />
        <SpeakerCard avatar={avatar13} name="Sparrow" />
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}
