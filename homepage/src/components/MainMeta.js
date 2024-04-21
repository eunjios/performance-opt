import React, { useRef, useEffect } from 'react';
import Meta from './Meta';
import TwoColumns from './TwoColumns';

function MainMeta(props) {
  const imgRef = useRef(null);

  const columns = [
    <img data-src={props.src} alt="" ref={imgRef} />,
    <Meta
      title={props.title}
      content={props.content}
      btnLink={props.btnLink}
    />,
  ];

  useEffect(() => {
    const options = {};
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <TwoColumns
      bgColor={props.bgColor}
      columns={props.type === 'leftImg' ? columns : columns.reverse()}
      mobileReverse={props.mobileReverse}
    />
  );
}

export default MainMeta;
