import React from 'react';
import classnames from 'classnames';
import PageTitle from '../../components/page-title';
import SpeakerCard from '../../components/speaker-card';
import avatar1 from '../../public/images/avatar1.png';

import styles from './index.module.less';

export default function Speakers() {
  const cls = classnames('flex justify-between items-center flex-wrap', styles.container);
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-black">
      <PageTitle title="Speakers" />
      <div className={cls}>
        <SpeakerCard avatar={avatar1} name="Max Mara" description="CTO" />
        <SpeakerCard avatar={avatar1} name="Max Mara" description="CTO" />
        <SpeakerCard avatar={avatar1} name="Max Mara" description="CTO" />
        <SpeakerCard avatar={avatar1} name="Max Mara" description="CTO" />
        <SpeakerCard avatar={avatar1} name="Max Mara" description="CTO" />
        <SpeakerCard avatar={avatar1} name="Max Mara" description="CTO" />
        <SpeakerCard avatar={avatar1} name="Max Mara" description="CTO" />
        <SpeakerCard avatar={avatar1} name="Max Mara" description="CTO" />
        <SpeakerCard avatar={avatar1} name="Max Mara" description="CTO" />
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}
