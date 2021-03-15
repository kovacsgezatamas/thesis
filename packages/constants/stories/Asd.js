import * as Styled from '../../../.storybook/styled'

function Asd({ children, ...rest }) {
  return (
    <Styled.ColorContainer {...rest} style={{ marginBottom: '40px' }}>
      {children}
    </Styled.ColorContainer>
  );
}

export default Asd;
