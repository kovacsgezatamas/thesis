import { Flex } from 'rebass/styled-components';

import spacing from '../src/spacing';

import * as Styled from '../../../.storybook/styled'

function SpacingStory() {
  return Object.keys(spacing).map(spacingKey => (
    <Flex key={spacingKey} alignItems="center">
      <Styled.TokenName width="160px">
        spacing.{spacingKey}
      </Styled.TokenName>

      <Styled.TokenValue>{spacing[spacingKey]}</Styled.TokenValue>
    </Flex>
  ));
}

SpacingStory.storyName = 'Spacing';

export default SpacingStory;
