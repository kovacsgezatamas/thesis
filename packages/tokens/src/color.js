import { lighten, darken } from 'polished';

function getAccentColors(colorPalette, accentNumbers) {
  const accentColors = {};

  for (const { name, hex } of colorPalette) {
    accentColors[name] = hex;

    for (const accent of accentNumbers) {
      const accentPercentage = accent / 100;
      accentColors[`${name}Light${accent}`] = lighten(accentPercentage, hex).toUpperCase();
      accentColors[`${name}Dark${accent}`] = darken(accentPercentage, hex).toUpperCase();
    }
  }

  return accentColors;
}

const baseColors = [
  { name: 'skyBlue', hex: '#87CEEB' },
  { name: 'dodgerBlue', hex: '#1E90FF' },
  { name: 'midnightBlue', hex: '#191970' },
  { name: 'turquoise', hex: '#888' },
  { name: 'paleGreen', hex: '#98FB98' },
  { name: 'seaGreen', hex: '#2E8B57' },
  { name: 'orange', hex: '#FFA500' },
  { name: 'orangeRed', hex: '#FF4500' },
];

const grayscaleColors = [
  { name: 'gray', hex: '#888' },
  { name: 'silver', hex: '#C0C0C0' },
];

const baseAccents = [5, 10, 20];
const grayscaleAccents = [10, 15, 20, 25, 30, 35, 40, 45];

const color = {
  white: '#FFF',
  ...getAccentColors(grayscaleColors, grayscaleAccents),
  ...getAccentColors(baseColors, baseAccents),
};

export default color;
export { baseColors, grayscaleColors, baseAccents, grayscaleAccents };
