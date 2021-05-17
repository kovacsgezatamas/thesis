import styled from 'styled-components';

const BackgropHelper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 24px;
`;

BackgropHelper.displayName = 'AnyContainer';

const BackdropSpinnerHelper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default BackgropHelper;
export { BackdropSpinnerHelper };
