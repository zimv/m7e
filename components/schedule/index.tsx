import React from 'react';
import PageTitle from '../page-title';
import styles from './index.module.less';

export default function Schedule() {
  function menuItemClick(index) {
    //
  }
  return (
    <div
      className="relative flex flex-col justify-center items-center w-screen h-screen bg-black"
      style={{ paddingBottom: 50 }}
    >
      <PageTitle title="Schedule" />
      <div className={styles.container}>
        <div className={styles['menu-title']}>Sept 29 ~ Nov 21</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Suzhou Hanshan Art Museum
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Exhibition：Avatar, My Metaverse
        </div>
        <div className={styles['menu-title']}>Oct 22 ~ 28</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          MOCA Exhibition in Metaverse and M50 Shanghai
        </div>
        <div className={styles['menu-title']}>Oct 23 ~ 24</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          M50 Innovation+ Space Shanghai Super ACG Avatar Live Experience
        </div>
        <div className={styles['menu-title']}>Oct 22</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          ideaPod the Bund House Shanghai
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Opening Forum: Quest for Metaverse Identity
        </div>
        <div className={styles['menu-title']}>Oct 23</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          M50 Innovation+ Space Shanghai
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Harmony Meetup: When Shanghai meets Silicon Valley in Metaverse
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          M50 Innovation+ Space Shanghai
        </div>
        <div className={styles['menu-title']}>Oct 24</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          MyCryptoProfile Meetup
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Dataverse Meetup
        </div>
        <div className={styles['menu-title']}>Oct 28</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Metaverse
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Closing Party
        </div>
      </div>
    </div>
  );
}
