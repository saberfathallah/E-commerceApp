/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cumulativeOffSet } from '../../utils/cumulativeOffSet';
import ItemDetailsSlideWrapper from './itemDetailsSlideWrapper';

class ItemDetailsSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.images[0],
    };
    this.imageRef = React.createRef();
  }

      handleImageChange = (e) => {
        const { images } = this.props;
        const currentX = e.clientX - cumulativeOffSet(this.imageRef.current).left;
        // hover actuel par aprt a l''image
        const part = this.imageRef.current.clientWidth / images.length;

        let imgIndex = Math.ceil(currentX / part) - 1;
        if (imgIndex < 0) {
          imgIndex = 0;
        }

        if (imgIndex >= images.length) {
          imgIndex = images.length - 1;
        }
        this.setState({ img: images[imgIndex] });
      };

      handleMouseOut = () => {
        this.setState({ img: this.props.images[0] });
      };

    changeImage = (i) => {
      this.setState({ img: this.props.images[i] });
    }
    render() {
      const { images, className } = this.props;
      return (
        <div className={className}>
          <aside className="col-sm-12 border-right">
            <article className="gallery-wrap">
              <div className="img-big-wrap">
                <div style={{ padding: '2rem' }}>
                  <img
                    ref={this.imageRef}
                    onMouseMove={(e) => this.handleImageChange(e)}
                    onMouseOut={() => this.handleMouseOut()}
                    src={this.state.img}
                    style={{ width: 209, height: 251 }}
                  />
                </div>
              </div>
              <div className="img-small-wrap">
                {
                  images.map((im, i) => (
                    <div className="item-gallery" onClick={() => { this.changeImage(i); }}><img src={im} /></div>
                  ))}
              </div>
            </article>
          </aside>
        </div>
      );
    }
}
ItemDetailsSlide.propTypes = {
  images: PropTypes.array,
  className: PropTypes.string,
};
export default ItemDetailsSlideWrapper(ItemDetailsSlide);
