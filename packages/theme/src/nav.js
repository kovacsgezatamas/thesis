import { fontFamily, fontSize, fontWeight, lineHeight, spacing, color } from '@thesis-ui/tokens';

const nav = {
  fontFamily: fontFamily,
  fontSize: fontSize.md,
  lineHeight: lineHeight.md,
  fontWeight: fontWeight.lg,
  disabledFontWeight: fontWeight.xs,
  selectedFontWeight: fontWeight.xxl,
  background: color.white,
  color: color.silverDark30,
  border: `4px solid ${color.turquoiseLight20}`,
  width: '240px',
  collapsedWidth: '80px',

  itemColor: color.grayDark30,
  itemDisabledColor: color.gray,
  itemSelectedColor: color.midnightBlueLight5,

  itemBackground: color.grayLight45,
  itemDisabledBackground: color.grayLight45,
  itemSelectedBackground: color.skyBlue,

  itemBorderBottom: `3px solid ${color.grayLight40}`,
  itemSelectedBorderBottom: `3px solid ${color.dodgerBlueLight10}`,

  itemPadding: `${spacing.lg} ${spacing.xl}`,
};

export default nav;
