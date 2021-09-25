import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import styles from './styles.module.less';

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactChild[];
}

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export default function MenuCarousel({ className, children }: CarouselProps) {
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
          <div onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 10 }}>
            <ArrowLeftOutlined style={{ fontSize: 24, color: '#FFFFFF' }} />
          </div>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <div onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 10 }}>
            <ArrowRightOutlined style={{ fontSize: 24, color: '#FFFFFF' }} />
          </div>
        )
      }
    >
      {children}
    </Carousel>
  );
}

export function CarouselItem({ children }: CarouselItemProps) {
  return <div>{children}</div>;
}

MenuCarousel.CarouselItem = CarouselItem;
