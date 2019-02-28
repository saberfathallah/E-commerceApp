import styled from 'styled-components';

export default (Component) => styled(Component)`
display: inline-block;
border: 1px solid #E8E8E8;
background: #ffffff;
margin-right: 25px;
min-height: 350px;
vertical-align: middle;
margin-bottom: 30px;
position: relative;
margin-top: -5px;
.item_img-promo {
  width: 30%;
  float: left;
  margin-bottom: 3px;
}
.item__price-line-through {  
  text-decoration: line-through;
  float: left;
  margin: 0;
  .item__price-tag-notdiscount-order {
  }
}

.item-promotion {
  height: 32px;
}

.item-promotion-label {
  float: left;
}

.item-promotion-date {
  font-size: 8px;
}

`;

