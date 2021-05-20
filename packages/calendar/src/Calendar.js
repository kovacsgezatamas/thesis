import PropTypes from 'prop-types';
import isDate from 'date-fns/isDate';

const calendarMode = {
  date: 'DATE',
  dateRange: 'DATE_RANGE',
};

function getFocusedDate(date, dateRange, mode) {
  if (mode === calendarMode.DATE) {
    return isDate(date) ? date : new Date();
  }

  if (isDate(dateRange.end)) {
    return dateRange.end;
  }

  if (isDate(dateRange.start)) {
    return dateRange.start;
  }

  return new Date();
}

function Calendar() {
  const focusedDate = getFocusedDate(date, dateRange);

  return <div />;
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  dateRange: PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
  }),
  mode: PropTypes.oneOf(['DATE', 'DATE_RANGE']),
  monthsNumber: PropTypes.number,
  onDateChange: PropTypes.func,
  onDateRangeChange: PropTypes.func,
};

Calendar.defaultProps = {
  date: undefined,
  dateRange: undefined,
  mode: 'DATE',
  monthsNumber: 2,
  onDateChange: () => {},
  onDateRangeChange: () => {},
}

export default Calendar;
