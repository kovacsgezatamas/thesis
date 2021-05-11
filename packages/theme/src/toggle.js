import { spacing, color } from "@thesis-ui/tokens";

const toggle = {
  width: '38px',
  height: '24px',
  borderRadius: spacing.md,
  marginRight: spacing.md,

  thumbSize: '16px',
  thumbBorderRadius: spacing.sm,

  border: `2px solid ${color.grayLight25}`,
  disabledBorder: `2px solid ${color.grayLight25}`,
  errorBorder: `2px solid ${color.orangeRed}`,

  background: color.white,
  disabledBackground: color.silverLight10,

  thumbColor: color.grayLight15,
  thumbCheckedColor: color.dodgerBlueDark5,
  thumbErrorColor: color.orangeRed,
};

export default toggle;
