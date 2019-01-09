import styled from 'styled-components';

export default (Component) => styled(Component)`
margin-right: 10px;
  .sidebar-nav{
    margin : 15px;
    width: 25%;
  }

  .sideBare-category-item {
    display: flex,
    align-items: baseline
  }

  .sideBareSubCategories-items {
    margin-left: 10px;
  }
  .ui.vertical.menu {
    width: 15rem;
    height: 514px;
}
 
  .sidebar{
    width: 10%;
  }
  .sidebar-nav-tite {
    text-align: center;
    Font-Weight: bold
  }
`;

