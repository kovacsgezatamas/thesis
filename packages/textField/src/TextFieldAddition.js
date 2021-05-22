import React from 'react';
import * as Styled from './TextField.styled';

function TextFieldAddition({ children, ...restProps }) {
  return (
    <Styled.Addition {...restProps}>
      {children}
    </Styled.Addition>
  );
}

export default TextFieldAddition;
