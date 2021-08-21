import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

// @ts-ignore
import styles from './styles.module.less';

function getRect(el) {
  return el.getBoundingClientRect();
}

function flip(firstRect, el) {
  requestAnimationFrame(() => {
    const lastEl = el;
    const lastRect = getRect(lastEl);
    const dx = lastRect.x - firstRect.x;
    const dy = lastRect.y - firstRect.y;
    const dw = lastRect.width / firstRect.width;
    const dh = lastRect.height / firstRect.height;
    lastEl.dataset.flipping = true;
    lastEl.style.setProperty('--dx', dx);
    lastEl.style.setProperty('--dy', dy);
    lastEl.style.setProperty('--dw', dw);
    lastEl.style.setProperty('--dh', dh);
    requestAnimationFrame(() => delete lastEl.dataset.flipping);
  });
}

function useFlip(ref) {
  const rectRef = useRef(null);
  useLayoutEffect(() => {
    if (ref.current) {
      if (!rectRef.current) {
        rectRef.current = getRect(ref.current);
      }
      flip(rectRef.current, ref.current);
      rectRef.current = getRect(ref.current);
    }
  });
}

function useKeyDown(onKeyDown) {
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);
}

/* ---------------------------------- */

function ImageTitle(props) {
  const ref = useRef(null);
  useFlip(ref);

  return <span {...props} ref={ref} data-flip className="title" />;
}

function Image({ src, title, selected, description, ...props }) {
  const ref = useRef(null);
  useFlip(ref);

  return (
    <div {...props} className="image" key={src} data-selected={selected || undefined}>
      <img data-flip src={src} ref={ref} />
      <ImageTitle>
        <strong>{title}</strong>
        <span>{description}</span>
      </ImageTitle>
    </div>
  );
}

export default function App({ title, onChange, dataSource = [] }) {
  const [selected, setSelected] = useState(0);

  // useKeyDown((event) => {
  //   switch (event.key) {
  //     case 'ArrowRight':
  //       setSelected((selected) => (selected + 1) % slides.length);
  //       break;
  //     case 'ArrowLeft':
  //       setSelected((selected) => (slides.length + (selected - 1)) % slides.length);
  //       break;
  //     default:
  //       break;
  //   }
  // });

  const onSelectChange = React.useCallback(
    (index) => {
      if (onChange) {
        onChange(index, dataSource);
      }

      setSelected(index);
    },
    [dataSource, onChange],
  );

  return (
    <div className={styles['slider-box']}>
      <h1 className="text-2xl text-gray-700">{title}</h1>
      <div className="slider-gallery">
        {dataSource.map((slide, index) => {
          return (
            <Image
              src={slide.image}
              description={slide.description}
              title={slide.title}
              selected={index === selected}
              key={index}
              onClick={() => onSelectChange(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
