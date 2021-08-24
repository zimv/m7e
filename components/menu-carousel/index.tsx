import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { ArrowLeftOutlined,  ArrowRightOutlined} from '@ant-design/icons';
import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function MenuCarousel({
  className,
}: Props) {
  const cls = classnames(styles['menu-carousel'], className);

  const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
};

  return (
    <Carousel 
      className={cls} 
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <div onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                      <ArrowLeftOutlined style={{ fontSize: '28rem', color: '#FFFFFF' }} />
                  </div>
              )} 
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <div onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
              <ArrowRightOutlined style={{ fontSize: '28rem', color: '#FFFFFF' }} />
          </div>
      )}
    > 
      <div>
        <div className={styles['menu-title']}>9.9</div>
        <div className={styles['menu-item']}>14:00 MOCA Exhibition</div>
        <div className={styles['menu-sub-item']}>元宇宙展览开幕</div>
        <div className={styles['menu-item']}>16:00 Party</div>
        <div className={styles['menu-sub-item']}>电音派对</div>
        <div className={styles['menu-item']}>19:00 Forum</div>
        <div className={styles['menu-sub-item']}>论坛</div>
      </div>
      <div>
            <div className={styles['menu-title']}>9.9</div>
            <div className={styles['menu-item']}>14:00 MOCA Exhibition</div>
            <div className={styles['menu-sub-item']}>元宇宙展览开幕</div>
            <div className={styles['menu-item']}>16:00 Party</div>
            <div className={styles['menu-sub-item']}>电音派对</div>
            <div className={styles['menu-item']}>19:00 Forum</div>
            <div className={styles['menu-sub-item']}>论坛</div>
        </div>
      <div>
            <div className={styles['menu-title']}>9.9</div>
            <div className={styles['menu-item']}>14:00 MOCA Exhibition</div>
            <div className={styles['menu-sub-item']}>元宇宙展览开幕</div>
            <div className={styles['menu-item']}>16:00 Party</div>
            <div className={styles['menu-sub-item']}>电音派对</div>
            <div className={styles['menu-item']}>19:00 Forum</div>
            <div className={styles['menu-sub-item']}>论坛</div>
        </div>
    </Carousel>
  );
}