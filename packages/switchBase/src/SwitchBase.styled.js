import styled from 'styled-components';

const Input = styled.input.attrs(() => ({
  'data-test-id': 'SWITCH_BASE_INPUT',
}))`
  position: absolute;
  opacity: 0;
  cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
`;

const Container = styled.div.attrs(() => ({
  'data-test-id': 'SWITCH_BASE_CONTAINER',
}))`
  display: flex;
  align-items: center;
  position: relative;

  label {
    display: flex;
    text-align: left;
    align-items: center;
    word-spacing: normal;
  }
`;

export { Input, Container };
