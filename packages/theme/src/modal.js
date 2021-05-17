import { fontFamily, fontSize, lineHeight, fontWeight, spacing, color } from '@thesis-ui/tokens';

const modal = {
  fontFamily: fontFamily,
  fontSize: fontSize.md,
  lineHeight: lineHeight.md,

  width: '520px',
  border: `4px solid ${color.silverLight10}`,
  borderRadius: spacing.sm,
  background: color.white,
  color: color.grayDark45,
  elevation: 2000,

  headerFontSize: fontSize.lg,
  headerFontWeight: fontWeight.lg,
  headerColor: color.grayDark30,
  headerPadding: `${spacing.lg} ${spacing.xxl} ${spacing.lg} ${spacing.xl}`,
  headerBorderBottom: `2px solid ${color.silverLight15}`,

  headerCloseSize: fontSize.md,
  headerCloseWeight: fontWeight.xxxl,

  footerPadding: `${spacing.lg} ${spacing.xxl} ${spacing.lg} ${spacing.xl}`,
  footerBorderTop: `2px solid ${color.silverLight15}`,
  footerButtonMargin: `0 ${spacing.md}`,
};

export default modal;
