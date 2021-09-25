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
        <div className={styles['menu-title']}>Sept 15 ~ Oct 28</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          NFT Airdrop & Claim on M7E.SH
        </div>
        <div className={styles['menu-title']}>Sept 29 ~ Nov 21</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Suzhou Hanshan Art Museum
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Exhibition：Avatar, My Metaverse
        </div>
        <div className={styles['menu-title']}>Oct 22 ~ 28</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          MOCA Exhibition in Metaverse adn M50 Shanghai
        </div>
        <div className={styles['menu-title']}>Oct 23 ~ 24</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          M50 Innovation+ Space Shanghai Super ACG Avatar Live Experience
        </div>
        <div className={styles['menu-title']}>Oct 24 ~ 28</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          NFT Scavenger Hunt in Shanghai
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
          AM, M50 Innovation+ Space Shanghai
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Harmony Meetup: When Shanghai meets Silicon Valley in Metaverse
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          PM, M50 Innovation+ Space Shanghai
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          NFT Avatar Carnival
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Night, M50 Innovation+ Space Shanghai
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Polygon Ecosystem Metaverse Night
        </div>
        <div className={styles['menu-title']}>Oct 24</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          M50 Innovation+ Space Shanghai
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Nash Metaverse: 4X-Inception Exhibition
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Night, ideaPod the Bund House Shanghai
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Metaverse Cocktail: Quest for Metaverse Identity by MyCrptoProfile & Dataverse
        </div>
        <div className={styles['menu-title']}>Oct 28</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Night, Metaverse
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Closing Party
        </div>
      </div>
    </div>
  );
}
