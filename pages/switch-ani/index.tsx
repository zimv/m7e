import { useState } from 'react';
import classnames from 'classnames';
import styles from '../../styles/switch-ani/index.module.less';

function SwitchAni() {
  const [tab, setTab] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const getStyle = (block) => {
    if (block === 'blockBlack' && activeTab !== '') return styles.blockBlackNone;
    if (activeTab === block) return styles.activeTab;
    if (tab) return styles.tab;
    return '';
  };
  return (
    <>
      <div className={classnames(styles.blockWrap, styles.bg)}>
        {tab ? (
          <div
            className={styles.back}
            onClick={() => {
              setTab(false);
              setActiveTab('');
            }}
          >
            Back
          </div>
        ) : (
          ''
        )}
        <div
          className={classnames({
            [styles.block1]: true,
            [styles.tab]: tab,
            [styles.activeStyle]: activeTab === 'block1',
          })}
          onClick={() => setActiveTab('block1')}
        ></div>
        <div className={classnames(styles.blockBlack, styles.blockBlackNone)}></div>
        <div
          className={classnames({
            [styles.block2]: true,
            [styles.tab]: tab,
            [styles.activeStyle]: activeTab === 'block2',
          })}
          onClick={() => setActiveTab('block2')}
        ></div>
        <div
          className={classnames({
            [styles.block3]: true,
            [styles.tab]: tab,
            [styles.activeStyle]: activeTab === 'block3',
          })}
          onClick={() => setActiveTab('block3')}
        ></div>
        <div
          className={classnames({
            [styles.block4]: true,
            [styles.tab]: tab,
            [styles.activeStyle]: activeTab === 'block4',
          })}
          onClick={() => setActiveTab('block4')}
        ></div>
        <div
          className={classnames({
            [styles.block5]: true,
            [styles.tab]: tab,
            [styles.activeStyle]: activeTab === 'block5',
          })}
          onClick={() => setActiveTab('block5')}
        ></div>

        <div className={styles.blockWrap}>
          <div
            className={classnames(styles.block1, getStyle('block1'), styles.con)}
            onClick={() => {
              setTab(true);
              setActiveTab('block1');
            }}
          >
            <div className={styles.mini}>page1 mini</div>
          </div>
          <div className={classnames(styles.blockBlack, getStyle('blockBlack'))}>
            <div className={styles.mini}>black mini</div>
          </div>
          <div
            className={classnames(styles.block2, getStyle('block2'), styles.con)}
            onClick={() => {
              setTab(true);
              setActiveTab('block2');
            }}
          >
            <div className={styles.mini}>page2 mini</div>
          </div>
          <div
            className={classnames(styles.block3, getStyle('block3'), styles.con)}
            onClick={() => {
              setTab(true);
              setActiveTab('block3');
            }}
          >
            <div className={styles.mini}>page3 mini</div>
          </div>
          <div
            className={classnames(styles.block4, getStyle('block4'), styles.con)}
            onClick={() => {
              setTab(true);
              setActiveTab('block4');
            }}
          >
            <div className={styles.mini}>page4 mini</div>
          </div>
          <div
            className={classnames(styles.block5, getStyle('block5'), styles.con)}
            onClick={() => {
              setTab(true);
              setActiveTab('block5');
            }}
          >
            <div className={styles.mini}>page5 mini</div>
          </div>
        </div>

        {tab ? (
          <div className={styles.blockWrapPage}>
            <div className={classnames(styles.page, activeTab === 'block1' ? styles.show : '')}>
              page1 main page
            </div>
            <div className={classnames(styles.page, activeTab === 'block2' ? styles.show : '')}>
              page2 main page
            </div>
            <div className={classnames(styles.page, activeTab === 'block3' ? styles.show : '')}>
              page3 main page
            </div>
            <div className={classnames(styles.page, activeTab === 'block4' ? styles.show : '')}>
              page4 main page
            </div>
            <div className={classnames(styles.page, activeTab === 'block5' ? styles.show : '')}>
              page5 main page
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default SwitchAni;
