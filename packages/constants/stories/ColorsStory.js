import { Flex, Box } from 'rebass/styled-components';

import { baseColors, grayscaleColors, baseAccents, grayscaleAccents } from '../src/color';

import * as Styled from '../../../.storybook/styled'
import Color from '../../../.storybook/components/Color';
import ColorGroup from '../../../.storybook/components/ColorGroup';

function ColorsStory() {
  return (
    <Flex
      justifyContent="flex-start"
      flexWrap="wrap"
      data-test-id="SB_COLORS_CONTAINER"
    >
      <Color name="white" />

      <Styled.ColorSeparator />

      <ColorGroup colors={grayscaleColors} accents={grayscaleAccents} />

      <ColorGroup colors={baseColors} accents={baseAccents} />
    </Flex>
  );
}

ColorsStory.storyName = 'Colors';

export default ColorsStory;
