import { Box } from 'rebass/styled-components';

import { color } from '../../packages/constants/src';

import Color from './Color';
import * as Styled from '../styled'

function ColorGroup({ colors, accents }) {
  return colors.map(({ name: baseName }) => (
    <>
      <Color name={baseName} />

      <Box width="100%" />

      {[...accents].reverse().map(accent => {
        const colorName = `${baseName}Light${accent}`;
        const colorHex = color[colorName];

        if (colorHex === '#FFF') {
          return null;
        }

        return <Color name={colorName} />;
      })}

      {accents.map(accent => (
        <Color name={`${baseName}Dark${accent}`} />
      ))}

      <Styled.ColorSeparator />
    </>
  ));
}

export default ColorGroup;
