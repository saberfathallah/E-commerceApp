import styled from 'styled-components';
const WrapperNavigation = (WrappedComponent) => styled(WrappedComponent)`
display: block;
padding: 0px 40px;
background: #cec8c8;
height: 93px;
line-height: 93px;
margin-bottom: 11px;

ul {
  margin: 0;
  padding: 0;
  margin-left: 46px;
  margin-top: -3px;
  li {
    display: inline-block;
    padding-right: 28px;
    a {
      color: #1E2226;
      font-size: 16px;
      letter-spacing: 0.4px;
      line-height: 19px;
      text-decoration: none;
      text-transform: uppercase;
      &:after {
        content: "";
        height: 7px;
        width: 7px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        border: solid #1366DA;
        border-width: 0 1px 1px 0;
        display: inline-block;
        padding: 0;
        margin: 3px 13px;
      }
    }
  }
}

.navigation-user-name {
  color: #1E2226;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: italic;
  font-weight: 800;
  line-height: 22px;
  border-bottom: 2px solid #1E2226;
  margin-right: 67px;
  white-space: nowrap;
}

.logout-btn {
  background: none;
}

ul, .right-side {
  display: inline-block;
  vertical-align: middle;
}
.right-side {
  float: right;
}

@media screen and (max-width: 768px) {
  .menu {
    background: white;
    z-index: 1000;
    position: absolute;
    left: 0;
    top: 93px;

    margin-left: 0;
    li {
      padding-right: 28px;
      padding-left: 40px;
      width: 100%;
      a {
        display: inline-block;
        &:after {
          position: absolute;
          right: 20px;
          transform: rotate(-45deg);
        }
      }
    }
  }
  .menu {
    display: none;
  }
  .right-side {
    position: absolute;
    left: 15.7%;
    top: -1px;
  }
}
@media screen and (max-width: 640px) {
  .right-side {
    left: 15%;
    top: 0;
  }
}
`;
export default WrapperNavigation;
