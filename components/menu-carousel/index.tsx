import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { ArrowLeftOutlined,  ArrowRightOutlined} from '@ant-design/icons';
import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children? :React.ReactChild[];
}

export default function MenuCarousel({
  className,
  children,
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
      {children}
    </Carousel>
  );
}

export function CarouselItem({
 children
}: Props){
  return <>{children}</>
}

MenuCarousel.CarouselItem = CarouselItem;