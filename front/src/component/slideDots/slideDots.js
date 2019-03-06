/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import PropTypes from 'prop-types';
import slideDotsWrapper from './slideDotsWrapper';

const SlideDots = ({
  len,
  activeItem,
  changeItem,
  className,
}) => {
  const dots = [];
  for (let i = 0; i < len; i++) {
    let dotClass = 'owl-dot';

    if (activeItem === i) {
      dotClass += ' active';
    }

    dots.push(<button
      onClick={() => { changeItem(i); }}
      role="button"
      className={dotClass}
    ><span></span>
    </button>);
  }

  return (
    <div className={className}>
      <div className="owl-dots">
        {dots}
      </div>
    </div>
  );
};

SlideDots.propTypes = {
  len: PropTypes.number,
  activeItem: PropTypes.number,
  changeItem: PropTypes.number,
  className: PropTypes.object,
};

export default slideDotsWrapper(SlideDots);
