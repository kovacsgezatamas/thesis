import styled, { keyframes } from 'styled-components';
import { spinner as theme } from '@thesis-ui/theme';

const getSvgAnimation = () => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const getCircleAnimation = ({ isSmall }) => keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: ${isSmall ? -63 : -128};
  }
`;

const Svg = styled.svg.attrs(({ isSmall }) => {
  const viewBoxSize = parseInt(isSmall ? theme.smallSize : theme.size, 10);

  return {
    viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`,
  }
})`
  animation: ${getSvgAnimation} 2000ms linear infinite;
  width: ${({ isSmall }) => isSmall ? theme.smallSize : theme.size};
  height: ${({ isSmall }) => isSmall ? theme.smallSize : theme.size};
`;

const Circle = styled.circle.attrs(({ isSmall }) => {
  const size = parseInt(isSmall ? theme.smallSize : theme.size, 10);

  return {
    fill: theme.fillColor,
    strokeWidth: isSmall ? theme.smallTickness : theme.tickness,
    r: isSmall ? 10 : 20,
    cx: size / 2,
    cy: size / 2,
  }
})`
  stroke: ${theme.color};
  stroke-linecap: round;
  animation: ${getCircleAnimation} 2400ms ease-in-out infinite;
`;

export { Svg, Circle };
