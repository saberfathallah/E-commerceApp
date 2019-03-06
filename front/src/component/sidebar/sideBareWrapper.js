import styled from 'styled-components';

export default (Component) => styled(Component)`
.custom-checkbox {
  display: block;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  user-select: none;

  &__input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;


  }

  &__span {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 1.2rem;
    width: 1.2rem;
    background-color: white;
    border: 2px solid gray;

    &::after {
      content: "";
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      width: .6rem;
      height: .6rem;
      background-color: dodgerblue;
      transform: translate(-50%, -50%);
    }
  }

  &:hover &__span {
    background-color: #eeeeee;
  }

  &__input:checked + &__span::after {
    opacity: 1;
  }
}
`;

