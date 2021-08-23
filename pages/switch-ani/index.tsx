
import {useEffect,useState} from 'react';
import classnames from 'classnames';
import 'tailwindcss/tailwind.css';

import styles from '../../styles/switch-ani/index.module.less';

function SwitchAni() {
  const [tab, setTab] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  useEffect(()=>{
    setTimeout(()=>{
      setTab(true)
      setActiveTab('block1')
    }, 2000)
    setTimeout(()=>{
      setActiveTab('block2')
    }, 3500)
    setTimeout(()=>{
      setActiveTab('block3')
    }, 5000)
    setTimeout(()=>{
      setActiveTab('block4')
    }, 6500)
    setTimeout(()=>{
      setActiveTab('block5')
    }, 8000)
  }, [])
  const getStyle = (block) => {
    if(block === 'blockBlack' && activeTab !== '') return styles.blockBlackNone;
    if(activeTab === block) return styles.activeTab;
    if(tab) return styles.tab;
    return '';
  }
  return (
    <>
      <div className={styles.blockWrap}>
        <div className={classnames(styles.block1, tab ? styles.tab : '', activeTab==='block1' ? styles.activeStyle : '')}></div>
        <div className={classnames(styles.blockBlack, styles.blockBlackNone)}></div>
        <div className={classnames(styles.block2, tab ? styles.tab : '', activeTab==='block2' ? styles.activeStyle : '')}></div>
        <div className={classnames(styles.block3, tab ? styles.tab : '', activeTab==='block3' ? styles.activeStyle : '')}></div>
        <div className={classnames(styles.block4, tab ? styles.tab : '', activeTab==='block4' ? styles.activeStyle : '')}></div>
        <div className={classnames(styles.block5, tab ? styles.tab : '', activeTab==='block5' ? styles.activeStyle : '')}></div>
      </div>
      <div className={styles.blockWrap}>
        <div className={classnames(styles.block1, getStyle('block1'), styles.con)}></div>
        <div className={classnames(styles.blockBlack, getStyle('blockBlack'))}></div>
        <div className={classnames(styles.block2, getStyle('block2'), styles.con)}></div>
        <div className={classnames(styles.block3, getStyle('block3'), styles.con)}></div>
        <div className={classnames(styles.block4, getStyle('block4'), styles.con)}></div>
        <div className={classnames(styles.block5, getStyle('block5'), styles.con)}></div>
      </div>
      <div className={styles.blockWrapPage}>
        <div className={classnames(styles.page,  activeTab==='block1' ? styles.show : '')}>
          page1
        </div>
        <div className={classnames(styles.page,  activeTab==='block2' ? styles.show : '')}>
          page2
        </div>
        <div className={classnames(styles.page,  activeTab==='block3' ? styles.show : '')}>
          page3
        </div>
        <div className={classnames(styles.page,  activeTab==='block4' ? styles.show : '')}>
          page4
        </div>
        <div className={classnames(styles.page,  activeTab==='block5' ? styles.show : '')}>
          page5
        </div>
      </div>
    </>
  );
}

export default SwitchAni;
