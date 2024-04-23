import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { useDispatch } from 'react-redux';
import { setBgColor, showModal } from '../redux/imageModal';
import { getAverageColorOfImage } from '../utils/getAverageColorOfImage';

function PhotoItem({ photo: { urls, alt } }) {
  const dispatch = useDispatch();

  const openModal = e => {
    dispatch(showModal({ src: urls.full, alt }));

    const averageColor = getAverageColorOfImage(e.target);
    dispatch(setBgColor(averageColor));
  };

  return (
    <ImageWrap>
      <LazyLoad offset={1000}>
        <Image
          src={urls.small + '&t=' + new Date().getTime()}
          alt={alt}
          onClick={openModal}
          crossOrigin="*"
        />
      </LazyLoad>
    </ImageWrap>
  );
}

const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
`;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export default PhotoItem;
