import { Flex, Box } from 'rebass/styled-components';

import { fontFamily, fontSize, lineHeight, fontWeight } from '../src/typoghaphy';
import spacing from '../src/spacing';
import color from '../src/color';

import * as Styled from '../../../.storybook/styled';
import { SAMPLE_LONG_TEXT, SAMPLE_SHORT_TEXT } from '../../../.storybook/constants';

function TypographyStory() {
  return (
    <>
      <Flex alignItems="center">
        <Styled.TokenName width="140px">fontFamily</Styled.TokenName>
        <Styled.TokenValue>{fontFamily}</Styled.TokenValue>
      </Flex>

      <Box height={spacing.lg} />

      {Object.keys(fontSize).map(fontSizeKey => (
        <Flex alignItems="center" key={`fontSize.${fontSizeKey}`}>
          <Styled.TokenName width="150px">
            fontSize.{fontSizeKey}
          </Styled.TokenName>

          <Styled.TokenValue style={{ fontSize: fontSize[fontSizeKey] }}>
            {fontSize[fontSizeKey]}
          </Styled.TokenValue>
        </Flex>
      ))}

      <Box height={spacing.xxl} />

      {Object.keys(lineHeight).map(lineHeightKey => (
        <Flex alignItems="center" key={`lineHeight.${lineHeightKey}`}>
          <Styled.TokenName width="165px">
            lineHeight.{lineHeightKey}
          </Styled.TokenName>

          <Styled.TokenValue style={{ width: '40px', minWidth: '40px' }}>
            {lineHeight[lineHeightKey]}
          </Styled.TokenValue>

          <Styled.TokenValue
            style={{
              fontSize: fontSize.md,
              lineHeight: lineHeight[lineHeightKey]
            }}
          >
            {SAMPLE_LONG_TEXT}
          </Styled.TokenValue>
        </Flex>
      ))}

      <Box height={spacing.xxl} />

      {Object.keys(fontWeight).map(fontWeightKey => (
        <Flex alignItems="center" key={`fontWeight.${fontWeightKey}`}>
          <Styled.TokenName width="180px">
            fontWeight.{fontWeightKey}
          </Styled.TokenName>

          <Styled.TokenValue>
            {fontWeight[fontWeightKey]}
          </Styled.TokenValue>

          <Styled.TokenValue
            style={{
              fontSize: fontSize.md,
              fontWeight: fontWeight[fontWeightKey]
            }}
          >
            {SAMPLE_SHORT_TEXT}
          </Styled.TokenValue>
        </Flex>
      ))}
    </>
  )
}

TypographyStory.storyName = 'Typography';

export default TypographyStory;
