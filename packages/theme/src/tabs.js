import { spacing, color, fontFamily, fontSize, lineHeight, fontWeight } from '@thesis-ui/tokens';

const tabs = {
  fontFamily: fontFamily,
  fontSize: fontSize.lg,
  lineHeight: lineHeight.md,
  fontWeight: fontWeight.sm,

  containerPadding: 0,
  containerBackground: color.white,
  containerBorderBottom: `4px solid ${color.silverLight20}`,

  buttonBackground: color.white,
  selectedButtonBackground: color.white,
  disabledButtonBackground: color.silverLight20,

  buttonColor: color.grayDark30,
  selectedButtonColor: color.midnightBlueLight20,
  disabledButtonColor: color.grayDark15,

  buttonPadding: `${spacing.sm} ${spacing.md}`,

  selectionLineHeight: spacing.xs,
  selectionLineColor: color.midnightBlueLight20,
};

export default tabs;
