import React from 'react';

export default function Image({ url, title, open, inPlace, id, onInPlace, total, gsap }) {
  const [firstLoad, loaded] = React.useState(true);
  const clip = React.useRef(null);
  const border = React.useRef(null);

  const gap = 10;
  const circle = 7;
  const defaults = { transformOrigin: 'center center' };
  const duration = 0.75;
  const width = 400;
  const height = 400;
  const scale = 700;

  const bigSize = circle * scale;
  const overlap = 0;

  const getPosSmall = () => ({
    x: width / 2 - (total * (circle * 2 + gap) - gap) / 2 + id * (circle * 2 + gap),
    y: height - 30,
    scale: 1,
  });

  const getPosSmallAbove = () => ({
    x: width / 2 - (total * (circle * 2 + gap) - gap) / 2 + id * (circle * 2 + gap),
    y: height / 2,
    scale: 1,
  });

  const getPosSmallBelow = () => ({ x: width * 0.5, y: height - 30, scale: 1 });
  const getPosCenter = () => ({ x: width / 2, y: height / 2, scale: 7 });
  const getPosEnd = () => ({ x: width / 2 - bigSize + overlap, y: height / 2, scale });
  const getPosStart = () => ({ x: width / 2 + bigSize - overlap, y: height / 2, scale });

  const onStateChange = () => {
    loaded(false);
    if (border.current) {
      gsap.set(border.current, Object.assign(Object.assign({}, defaults), getPosSmall()));
      console.log(border.current);
    }
    if (clip.current) {
      const flipDuration = firstLoad ? 0 : duration;
      const upDuration = firstLoad ? 0 : 0.6;
      const bounceDuration = firstLoad ? 0.01 : 1;
      const delay = firstLoad ? 0 : flipDuration + upDuration;
      if (open) {
        gsap.fromTo(
          `.letters_${id}`,
          {
            rotation: 'random(-180, 180)',
            x: `random(${width * 0.7}, ${width * 0.9})`,
            y: `random(${height * 0.4}, ${height * 0.6})`,
            opacity: 1,
          },
          {
            ease: 'power3.Out',
            delay: `random(${upDuration + 0.2}, ${upDuration + 0.6})`,
            duration: flipDuration * 1.5,
            opacity: 1,
            rotation: 0,
            motionPath: [
              { x: width * 0.1, y: height * 0.5 },
              { x: 40, y: 60 },
            ],
          },
        );
        gsap
          .timeline()
          .set(clip.current, Object.assign(Object.assign({}, defaults), getPosSmall()))
          .to(
            clip.current,
            Object.assign(Object.assign(Object.assign({}, defaults), getPosCenter()), {
              duration: upDuration,
              ease: 'power3.inOut',
            }),
          )
          .to(
            clip.current,
            Object.assign(Object.assign(Object.assign({}, defaults), getPosEnd()), {
              duration: flipDuration,
              ease: 'power4.in',
              onComplete: () => onInPlace(id),
            }),
          );
      } else {
        gsap.timeline();
        // .fromTo(`.letters_${id}`, {x: 40, y: 60, rotation: 0}, {delay: 0.7, duration: duration * 2, x: `random(${width * 0.24}, ${width - 100})`, y: `random(${20}, ${height/2})`, opacity: 0.75, rotation: 'random(-90, 90)', ease: 'Power3.Out'})
        // .to(`.letters_${id}`, {duration: 0.3, ease: 'power2.in', opacity: 0, x: width / 2, y: height / 2})
        gsap
          .timeline({ overwrite: true })
          .set(clip.current, Object.assign(Object.assign({}, defaults), getPosStart()))
          .to(
            clip.current,
            Object.assign(Object.assign(Object.assign({}, defaults), getPosCenter()), {
              delay,
              duration: flipDuration,
              ease: 'power4.out',
            }),
          )
          .to(
            clip.current,
            Object.assign(Object.assign({}, defaults), {
              motionPath: [getPosSmallAbove(), getPosSmall()],
              duration: bounceDuration,
              ease: 'bounce.out',
            }),
          );
      }
    }
  };

  React.useEffect(onStateChange, [open, clip]);

  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      xmlnsXlink: 'http://www.w3.org/1999/xlink',
      viewBox: `0 0 ${width} ${height}`,
      preserveAspectRatio: 'xMidYMid slice',
    },
    React.createElement(
      'defs',
      null,
      React.createElement(
        'clipPath',
        { id: `${id}_circleClip` },
        React.createElement('circle', { class: 'clip', cx: '0', cy: '0', r: circle, ref: clip }),
      ),
      React.createElement(
        'clipPath',
        { id: `${id}_squareClip` },
        React.createElement('rect', { class: 'clip', width, height }),
      ),
    ),
    React.createElement(
      'g',
      { clipPath: `url(#${id + (inPlace ? '_squareClip' : '_circleClip')})` },
      React.createElement('image', { width, height, xlinkHref: url }),
      React.createElement(
        'g',
        { transform: 'translate(0 0)' },
        title
          .split('')
          .map((letter, i) =>
            React.createElement('text', { className: `letters_${id}`, x: 16 * i, y: 0 }, letter),
          ),
      ),
    ),
  );
}
