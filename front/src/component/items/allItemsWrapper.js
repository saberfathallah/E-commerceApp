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
`;
export default allItemsWrapper;
