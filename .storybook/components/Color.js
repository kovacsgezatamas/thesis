import { Box } from 'rebass/styled-components';

import { color } from '../../packages/constants/src';

import * as Styled from '../styled'

function Color({ name }) {
  return (
    <Styled.ColorContainer key={name}>
      <Styled.ColorCircle background={color[name]} hasBorder={name === 'white'} />
      <Box>
        <Styled.ColorValue>{name}</Styled.ColorValue>
        <Styled.ColorValue>{color[name]}</Styled.ColorValue>
      </Box>
    </Styled.ColorContainer>
  );
}

export default Color;
