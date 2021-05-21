import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  spacing,
  color,
} from '@thesis-ui/tokens';

const timeSelector = {
  fontFamily: fontFamily,
  fontSize: fontSize.md,
  lineHeight: lineHeight.md,
  fontWeight: fontWeight.md,
  width: '120px',
  height: '172px',
  border: `2px solid ${color.silver}`,
  borderRadius: spacing.sm,
  background: color.white,
  color: color.grayDark45,
  elevation: 3000,
  itemPadding: `${spacing.xs} ${spacing.md}`,
  itemHeight: '28px',
  itemHoverBackground: color.grayLight40,
  itemSelectedBackground: color.turquoiseLight20,
  itemSelectedFontWeight: fontWeight.lg,
};

export default timeSelector;
