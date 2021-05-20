import { fontFamily, fontSize, lineHeight, spacing, color } from '@thesis-ui/tokens';

const calendar = {
  fontFamily: fontFamily,
  fontSize: fontSize.md,
  lineHeight: lineHeight.md,

  daySize: '32px',
  dayTodayHeight: '3px',
  dayBorderRadius: spacing.sm,

  todayColor: color.seaGreenDark5,
  todaySelectedColor: color.white,
  todayBorderRadius: spacing.xxs,

  dayColor: color.grayDark30,
  dayWeekendColor: color.grayLight10,
  daySelectedColor: color.white,

  dayBackground: color.white,
  daySelectedBackground: color.seaGreenDark5,
};

export default calendar;
