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

.bloc-4 {
  img {
    margin: 0 auto;
    clear: both;
    padding-top: 33px;
    display: block;
    .jeans {
      max-height: 180px;
    }
  }
  .name_prod {
    color: #1E2226;
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 26px;
    text-transform: uppercase;
  }
  .color_prod {
    color: #C6C6C6;
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 18px;
    text-align: center;
    display: block;
    margin-top: -3px;
  }
  .price_prod {
    color: #1366DA;
    display: block;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    padding-top: 19px;
  }
  .price_prod_old {
    color: #88A7D4;
    display: block;
    font-size: 12px;
    line-height: 15px;
    text-decoration: line-through;
  }
  .new {
    color: #FFFFFF;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    height: 28px;
    width: 70px;
    background-color: #80C816;
    border-radius: 15px;
    position: absolute;
    top: 25px;
    right: 15px;
  }
  .promo {
    color: #FFFFFF;
    z-index: 1;
    font-size: 14px;
    line-height: 26px;
    height: 27px;
    width: 70px;
    background-color: #EB3D15;
    border-radius: 20px;
    position: absolute;
    right: 15px;
    top: 23px;
    text-align: center;
  }
  .article-info {
    position: absolute;
    width: 100%;
    bottom: 26px;
    height: 90px;
    text-align: center;
  }
}

@media screen and (max-width: 768px){
  width: calc(100% * (1/2) - 45px);
  margin: 0 18px 27px 9px;
  .articles {
    padding-left: 50px;
  }
}
@media screen and (max-width: 640px){
  width: calc(100% * 1 - 40px);
  margin: 3px 18px 24px 0px;
  .bloc-4 {
    .promo {
      right: 23.8%;
    }
  }
}
`;

