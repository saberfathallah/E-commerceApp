import styled from 'styled-components';

const allItemsWrapper = (WrappedComponent) => styled(WrappedComponent)`
width: 100%;
background: #F3F3F3;
padding-top: 8px;
text-align: center;

.articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

h2 {
  color: #1E2226;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.2px;
  line-height: 29px;
  text-align: center;
}

.filtre {
  display: block;
  margin-top: 29px;
  margin-bottom: -5px;
  li {
    display: inline-block;
    margin-bottom: 29px;
    position: relative;
    a {
      color: #1E2226;
      font-size: 16px;
      letter-spacing: 0.2px;
      line-height: 29px;
      text-decoration: none;
      margin-right: 25px;
      &.active {
        border-bottom: 2px solid #1E2226;
        display: inline-block;
        margin-left: -3px;
        margin-right: 23px;

      }
    }
    :nth-child(4){
      left: -3px;
    }
    :nth-child(5){
      left: -5px;
    }
    :nth-child(6){
      left: -8px;
    }
    :nth-child(7){
      left: -7px;
    }
    :nth-child(8){
      left: -10px;
    }
  }
}

.link {
  color: #1366DA;
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 18px;
  margin-bottom: 53px;
  text-decoration: none;
  display: block;
  padding-top: 12px;
  clear: both;
  padding-left: 18px;

  &:after {
    content: '';
    height: 4px;
    width: 4px;
    transform: rotate(315deg);
    -webkit-transform: rotate(315deg);
    border: solid #1366DA;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 0;
    margin: 3px 12px;
    position: relative;
    left: -5px;
  }
}
@media screen and (max-width: 768px) {
  h2 {
    margin-bottom: 29px;
    margin-top: 22px;
  }
  .filtre {
    margin: 0 auto;
    padding: 0 50px 39px 50px;
    li {
      margin: 0;
      left: 0 !important;
      a {
        line-height: 29px;
        &.active {
          margin-left: 30px;;
        }
      }
      :nth-child(3) {
        left: -29px;
      }
    }
  }
  .hide_me,
  .link {
    display: none;
  }
  .articles {
    padding-bottom: 71px;
    .special_jeans  {
      img {
        padding-top: 19px;
      }
      .price_prod {
        padding-top: 0px;
      }
      .price_prod_old {
        margin-top: -5px;
      }
    }
  }
}
@media screen and (max-width: 640px) {
  .articles {
    padding-bottom: 77px;
  }
  h2 {
    margin-top: 15px;
    margin-bottom: 28px;
  }
  .filtre {
    padding: 0;
    margin-bottom: 39px;
    li {
      a {
        line-height: 28px;
      }
    }
  }
  .hide_640 {
    display: none;
  }
}
`;
export default allItemsWrapper;
