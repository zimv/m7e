import React from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import styles from './styles.module.less';

export interface DataItem {
  url: string;
  author: string[];
  twitter: string[];
  platform: string;
  platformLink: string;
  title: string;
  type: string;
  desc: string
}

export default function MocaCard({ url, desc, type, title, author, platform, platformLink, twitter }: DataItem) {
  const cls = classnames(styles['moca-card']);
  return (
    <div className={cls}>
      <div className={styles.header}>
        <div className={styles.name}>{title}</div>
        <img src="/images/like.png" className={styles.like}></img>
        <span className={styles.num}>102</span>
      </div>
      <div className={styles.body}>
        <div className={styles.tit}>{/* <div className={styles.name}>Self Awakened</div> */}</div>
        <div className={styles.prod}>
          {type === 'img' ? <Image src={url} alt="production" /> : <div></div>}
        </div>
      </div>
      <div className={styles.hip}>
        <div className={classnames({
            [styles.l]: true,
            [styles.more]: author.length>1,
          })}>
          <img src="/images/moca-smile.png" className={styles.smile}></img>
          {author.map((item,i)=>{
            if(i===1) {
              return (<>
                <span className={styles.x}>x</span>
                <a href={twitter[i]} className={styles.link}>
                  {item}
                </a>
              </>)
            }
            return <a href={twitter[i]} className={styles.link}>
            {item}
          </a>
          })}
          
        </div>
        <div className={classnames({
            [styles.r]: true,
            [styles.more]: author.length>1,
          })}>
          <a href={platformLink} className={styles.link}>
            {platform.toLocaleUpperCase()}
          </a>
          {
          author.length===1 ? <a href={twitter[0]} className={styles.link}>
            Twitter
          </a> : ''
          }
        </div>
      </div>
      
      <div className={styles.footer}>{desc}</div>
    </div>
  );
}
