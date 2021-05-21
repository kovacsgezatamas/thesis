import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import objectSupport from 'dayjs/plugin/objectSupport';
import TextField, { TextFieldAddition } from '@thesis-ui/text-field';

import TimeSelectorPopper from './TimeSelectorPopper';

dayjs.extend(customParseFormat);
dayjs.extend(objectSupport);

const ALLOWED_TIME_FORMATS = [
  // 5pm, 5PM, 5:8 AM, 5:08 am
  'h:mm A',
  'hA mm',
  'ha mm',
  'h:m A',
  'hA m',
  'ha m',
  'hA',
  'ha',
  // 05pm, 05PM, 05:08 AM
  'hh:mm A',
  'hhA mm',
  'hhA',
  // 22, 04, 5:30, 19:20
  'HH:mm',
  'H:mm',
  'H:m',
  'HH',
  'H',
];

const ESC_KEY_CODE = 27;
const ENTER_KEY_CODE = 13;

function TimeSelector({
  value,
  isSmall,
  isDisabled,
  hasError,
  isRequired,
  placeholder,
  timeFormat,
  onChange,
  ...restProps
}) {
  const [selectedTimeValue, setSelectedTimeValue] = useState(undefined);
  const [textFieldValue, setTextFieldValue] = useState('');
  const [hasTextFieldError, setHasTextFieldError] = useState(false);
  const [isPopperVisible, setIsPopperVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const inputRef = useRef(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'offset',
        options: { offset: [52, 4] }},
      {
        name: 'flip',
        options: { fallbackPlacements: ['top-start'] },
      },
    ],
  });

  useEffect(() => {
    setTextFieldValue(formatValue(value));
  }, [value, timeFormat]);

  useEffect(() => {
    setHasTextFieldError(false);
    setSelectedTimeValue({ ...value });
  }, [value]);

  function parseTextFieldValue(textValue) {
    const dayjsObject = dayjs(textValue.toUpperCase(), ALLOWED_TIME_FORMATS);

    return {
      isValid: dayjsObject.isValid(),
      time: {
        hours: dayjsObject.hour(),
        minutes: dayjsObject.minute(),
      },
    }
  }

  function formatValue(timeValue) {
    if (!timeValue) {
      return '';
    }

    return dayjs({ hour: timeValue.hours, minute: timeValue.minutes })
      .format(timeFormat);
  }

  function onTextFieldValueChange(e) {
    const { value: textValue } = e.target;
    setTextFieldValue(textValue);

    if (!textValue) {
      setHasTextFieldError(false);
      setSelectedTimeValue(undefined);
      return;
    }

    const { isValid, time } = parseTextFieldValue(textValue);

    if (!isValid) {
      setHasTextFieldError(true);
      setSelectedTimeValue(undefined);
      return;
    }

    setHasTextFieldError(false);
    setSelectedTimeValue({
      hours: time.hours,
      minutes: time.minutes,
    })
  }

  function onTextFieldFocus() {
    setIsPopperVisible(true);
  }

  function onTextFieldBlur() {
    setIsPopperVisible(false);

    if (hasTextFieldError) {
      revertSelectedValues();
      return;
    }

    if (selectedTimeValue) {
      onChange({ ...selectedTimeValue });
      return;
    }

    onChange(undefined);
  }

  function onTextKeyDown({ keyCode }) {
    if (!inputRef.current) {
      return;
    }

    if (keyCode === ENTER_KEY_CODE) {
      inputRef.current.blur();
      return;
    }

    if (keyCode === ESC_KEY_CODE) {
      revertSelectedValues();
      window.setTimeout(() => inputRef.current.blur());
    }
  }

  function onDropdownChange(timeValue) {
    setHasTextFieldError(false);
    setSelectedTimeValue({ ...timeValue });
  }

  function revertSelectedValues() {
    setTextFieldValue(formatValue(value));
    setSelectedTimeValue({ ...value });
    setHasTextFieldError(false);
  }

  return (
    <>
      <TextField
        ref={setReferenceElement}
        inputPros={{
          ref: inputRef,
          onFocus: onTextFieldFocus,
          onBlur: onTextFieldBlur,
          onKeyDown: onTextKeyDown,
        }}
        value={textFieldValue}
        placeholder={placeholder}
        isSmall={isSmall}
        hasError={hasTextFieldError || hasError}
        isDisabled={isDisabled}
        autoComplete="off"
        prefix={<TextFieldAddition>time:</TextFieldAddition>}
        onChange={onTextFieldValueChange}
      />
      {isPopperVisible && (
        <TimeSelectorPopper
          ref={setPopperElement}
          style={styles.popper}
          value={selectedTimeValue}
          formatValue={formatValue}
          onChange={onDropdownChange}
          {...attributes.popper}
          {...restProps}
        />
      )}
    </>
  );
}

TimeSelector.proptypes = {
  value: PropTypes.instanceOf(Date),
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  timeFormat: PropTypes.string,
  onChange: PropTypes.func,
};

TimeSelector.defaultProps = {
  value: undefined,
  isSmall: false,
  isDisabled: false,
  hasError: false,
  isRequired: false,
  placeholder: '',
  timeFormat: 'HH:mm',
  onChange: () => {},
};

export default TimeSelector;
