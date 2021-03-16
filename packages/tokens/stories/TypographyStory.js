import { Flex, Box } from 'rebass/styled-components';

import { fontFamily, fontSize, lineHeight, fontWeight } from '../src/typoghaphy';
import spacing from '../src/spacing';
import color from '../src/color';

import * as Styled from '../../../.storybook/styled';

const sampleLongText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam odio sit amet sem dictum facilisis. Ut maximus odio eget pretium molestie. Proin tincidunt semper dui nec facilisis. Proin ornare, ante at gravida semper, justo lacus aliquet justo, vitae luctus nunc ex at orci. Phasellus pharetra ornare eros ac ultricies. Nulla facilisi. Etiam finibus vehicula nunc in posuere. Fusce posuere dui non tempus convallis. Duis imperdiet eros orci, imperdiet hendrerit justo commodo ac. Donec quis diam sit amet lacus venenatis pulvinar. Sed condimentum euismod magna eu blandit.';
const sampleShortText = 'In non maximus turpis, sit amet viverra tortor. Praesent tincidunt massa vitae aliquam luctus. In bibendum diam et bibendum vestibulum. Nam eget vulputate lectus. Maecenas vulputate, lacus vitae laoreet semper, erat orci interdum dolor, tempor condimentum diam ante nec';

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
            {sampleLongText}
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
            {sampleShortText}
          </Styled.TokenValue>
        </Flex>
      ))}
    </>
  )
}

TypographyStory.storyName = 'Typography';

export default TypographyStory;
