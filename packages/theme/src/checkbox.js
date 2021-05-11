import { spacing, color } from "@thesis-ui/tokens";

const checkbox = {
  size: '24px',
  borderRadius: spacing.xs,
  marginRight: spacing.md,

  checkIconTickness: '4px',
  checkIconLegWidth: '12px',
  checkIconLongWidth: '26px',
  indeterminateIconTickness: '3px',
  indeterminateIconWidth: '15px',

  border: `2px solid ${color.grayLight25}`,
  disabledBorder: `2px solid ${color.grayLight25}`,
  errorBorder: `2px solid ${color.orangeRed}`,

  checkColor: color.dodgerBlueDark5,
  errorCheckColor: color.orangeRed,
  indeterminateColor: color.silverDark20,

  background: color.white,
  disabledBackground: color.silverLight10,
};

export default checkbox;
