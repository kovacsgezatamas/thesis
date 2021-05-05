import { fontFamily, fontSize, lineHeight, spacing, color } from '@thesis-ui/tokens';

const button = {
  fontFamily: fontFamily,
  largeFontSize: fontSize.md,
  smallFontSize: fontSize.md,
  lineHeight: lineHeight.md,
  borderRadius: spacing.lg,

  largePadding: `${spacing.sm} ${spacing.lg}`,
  smallPadding: `${spacing.xs} ${spacing.md}`,

  primaryColor: color.skyBlueLight20,
  primaryHoverColor: color.silverLight20,
  primaryDisabledColor: color.grayLight45,
  primaryBackground: color.midnightBlueLight10,
  primaryHoverBackground: color.midnightBlueLight20,
  primaryDisabledBackground: color.gray,

  secondaryColor: color.midnightBlueDark5,
  secondaryHoverColor: color.midnightBlueDark10,
  secondaryDisabledColor: color.silverDark45,
  secondaryBackground: color.turquoiseLight20,
  secondaryHoverBackground: color.skyBlueLight10,
  secondaryDisabledBackground: color.silverLight10,

  border: '0 none',
};

export default button;
