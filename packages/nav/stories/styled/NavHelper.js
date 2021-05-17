import styled from 'styled-components';

const NavHelper = styled.div`
  height: 500px;
  width: 500px;
  border: 2px solid #EEE;
  border-radius: 4px;
`;

NavHelper.displayName = 'AnyContainer';

const NavItemHelper = styled.div`
  width: 240px;
`;

NavItemHelper.displayName = 'AnyContainer';

export default NavHelper;
export { NavItemHelper };
