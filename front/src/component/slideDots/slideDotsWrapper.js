import styled from 'styled-components';

export default (Component) => styled(Component)`
.owl-dots {
    display: none;
    position: absolute;
    bottom: -1rem;
    left: 0;
  
  }
  
  .owl-dots {
    width: 100%;
    text-align: center;
  }
  
  .owl-dots .active.owl-dot {
    background-color: #f28b00;
    border-color: #f28b00;
  }
  
  .owl-dots .owl-dot {
    display: inline-block;
    zoom: 1;
    margin: 8px 4px;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -webkit-border-radius: 10px;
    -ms-webkit-radius: 10px;
    zoom: 1;
    background-color: #fff;
    padding: 3px;
    border: solid 1px #e9e9e9;
    cursor: pointer;
  }
`;

