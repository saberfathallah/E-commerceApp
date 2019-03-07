import styled from 'styled-components';

export default (Component) => styled(Component)`
.gallery-wrap .img-big-wrap img {
    height: 450px;
    width: auto;
    display: inline-block;
  }
  
  
  
  .gallery-wrap .img-small-wrap .item-gallery {
    width: 60px;
    height: 60px;
    border: 1px solid #ddd;
    margin: 7px 2px;
    display: inline-block;
    overflow: hidden;
  }
  
  .gallery-wrap .img-small-wrap {
    text-align: center;
  }
  .gallery-wrap .img-small-wrap img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
  }
`;

