import React from 'react';
import { Box } from 'rebass/styled-components';

import { color } from '../../packages/tokens/src';

import Color from './Color';
import * as Styled from '../styled'

function ColorGroup({ colors, accents }) {
  return colors.map(({ name: baseName }) => (
    <React.Fragment key={`${baseName}Group`}>
      <Color key={baseName} name={baseName} />

      <Box width="100%" />

      {[...accents].reverse().map(accent => {
        const colorName = `${baseName}Light${accent}`;
        const colorHex = color[colorName];

        if (colorHex === '#FFF') {
          return null;
        }

        return <Color name={colorName} key={colorName} />;
      })}

      {accents.map(accent => {
        const colorName = `${baseName}Dark${accent}`;
        return <Color name={colorName} key={colorName} />;
      })}

      <Styled.ColorSeparator />
    </React.Fragment>
  ));
}

export default ColorGroup;
