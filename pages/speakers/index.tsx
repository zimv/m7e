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

import styles from './index.module.less';

export default function Speakers() {
  const cls = classnames('flex justify-between items-center flex-wrap', styles.container);
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-black">
      <PageTitle title="VIPs" />
      <div className={cls}>
        <SpeakerCard avatar={avatar} name="Fabin Rasheed" />
        <SpeakerCard avatar={avatar1} name="Niq" />
        <SpeakerCard avatar={avatar2} name="IOYOI" />
        <SpeakerCard avatar={avatar3} name="Sleepy" />
        <SpeakerCard avatar={avatar4} name="Reva" />
        <SpeakerCard avatar={avatar5} name="TingSong" />
        <SpeakerCard avatar={avatar6} name="metaSynth" />
        <SpeakerCard avatar={avatar7} name="XIx" />
        <SpeakerCard avatar={avatar8} name="Baiwei" />
        <SpeakerCard avatar={avatar9} name="Rinii fish" />
        <SpeakerCard avatar={avatar10} name="Ton ran" />
        <SpeakerCard avatar={avatar11} name="Rutger Van Der Tas" />
        <SpeakerCard avatar={avatar12} name="Arc4g" />
        <SpeakerCard avatar={avatar13} name="Sparrow" />
        <SpeakerCard avatar={avatar14} name="Debbie Digital" />
        <SpeakerCard avatar={avatar15} name="Olive Allen" />
        <SpeakerCard avatar={avatar16} name="Facu" />
        <SpeakerCard avatar={avatar17} name="Skygolpe" />
        <SpeakerCard avatar={avatar18} name="Luluxx" />
        <SpeakerCard avatar={avatar19} name="Milton Sanz" />
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}
