import React from 'react';
import classnames from 'classnames';
import PageTitle from '../page-title';
import MocaCard from '../moca-card';
import avatar1 from '../../public/images/avatar1.png';

import styles from './index.module.less';

export default function Moca() {
  const cls = classnames('flex justify-between items-center flex-wrap', styles.container);
  return (
    <div className="flex justify-center items-center w-screen min-h-screen bg-black overflow-scroll">
      <PageTitle title="Self Awakened" />
      <div className={cls}>
        <MocaCard avatar={avatar1} name="Max Mara" description="CTO" />
        <MocaCard avatar={avatar1} name="Max Mara" description="CTO" />
        <MocaCard avatar={avatar1} name="Max Mara" description="CTO" />
        <MocaCard avatar={avatar1} name="Max Mara" description="CTO" />
        <MocaCard avatar={avatar1} name="Max Mara" description="CTO" />
        <MocaCard avatar={avatar1} name="Max Mara" description="CTO" />
        <MocaCard avatar={avatar1} name="Max Mara" description="CTO" />
        <MocaCard avatar={avatar1} name="Max Mara" description="CTO" />
        <MocaCard avatar={avatar1} name="Max Mara" description="CTO" />
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}
