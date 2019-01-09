import styled from 'styled-components';

export default (Component) => styled(Component)`
  .header_content-text {
    display: inline-block
    color: #1E2226;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: italic;
    line-height: 22px;
    border-bottom: 2px solid #1E2226;
    white-space: nowrap;
  }
  .header_content-button {
    float: right
  }
`;
