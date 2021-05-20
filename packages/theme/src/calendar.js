import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  spacing,
  color,
} from '@thesis-ui/tokens';

const calendar = {
  fontFamily: fontFamily,
  fontSize: fontSize.md,
  lineHeight: lineHeight.md,
  background: color.white,
  monthsGap: spacing.lg,
  navigationArrowColor: color.grayLight15,
  navigationArrowHoverColor: color.gray,
  navigationArrowSize: '4px',

  daySize: '36px',
  dayTodayHeight: '3px',
  dayBorderRadius: spacing.md,
  dayFontWeight: fontWeight.md,

  todayColor: color.turquoiseDark20,
  todaySelectedColor: color.white,
  todayBorderRadius: spacing.xxs,
  todayFontWeight: fontWeight.lg,

  dayColor: color.grayDark30,
  dayWeekendColor: color.grayLight10,
  daySelectedColor: color.white,

  dayBackground: color.white,
  daySelectedBackground: color.turquoiseDark10,

  dayHighlightBorder: `2px solid ${color.dodgerBlueLight10}`,
  dayHighlightBorderRadius: '10px',

  monthWidth: '252px',

  monthNameFontWeigth: fontWeight.xxl,
  monthNamePadding: spacing.sm,

  dayOfWeekColor: color.grayDark15,
  dayOfWeekPadding: `${spacing.sm} 0`,
  dayOfWeekBorderBottom: `2px solid ${color.turquoiseLight10}`,
  dayOfWeekMarginBottom: spacing.sm,
  dayOfWeekFontWeigth: fontWeight.lg,
};

export default calendar;
