import { fontFamily, fontSize, lineHeight, spacing, color } from '@thesis-ui/tokens';

const textarea = {
  fontFamily: fontFamily,
  fontSize: fontSize.md,
  lineHeight: lineHeight.md,

  borderRadius: spacing.sm,
  padding: spacing.sm,

  color: color.grayDark45,
  disabledColor: color.grayDark15,
  errorColor: color.grayDark45,

  border: `2px solid ${color.grayLight25}`,
  disabledBorder: `2px solid ${color.silverDark10}`,
  errorBorder: `2px solid ${color.orangeRed}`,

  background: color.white,
  disabledBackground: color.silverLight10,
  errorBackground: color.white,

  additionBackground: color.grayLight35,
  additionColor: color.grayDark20,
  additionPadding: `0 ${spacing.sm}`,
};

export default textarea;
