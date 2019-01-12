import gql from 'graphql-tag';
export default gql`
  mutation createOrderMutation($input: orderInput!) {
    createOrder(input: $input){
      order {
        total
      }
      error
    }
  }
`;
