import React from 'react';
import classes from './DateSelector.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { Tooltip } from 'antd';

const DateSelector = props => {
  return (
    <Tooltip placement="bottom" title="For display only, not in requirement yet">
      <div className={classes.DateSelectorContainer}>
        <div className={classes.Icon}>
          <FontAwesomeIcon icon={faCalendarAlt} className={'icon-color'} />
        </div>
        <div className={classes.Input}>
          <div className={classes.SelectedDate}>{props.selectedDate}</div>
          <div className={classes.SelectedDayName}>{props.selectedDayName}</div>
        </div>
      </div>
    </Tooltip>
  );
};

DateSelector.defaultProps = {
  selectedDate: moment()
    .format('MMMM DD, YYYY')
    .toUpperCase(),
  selectedDayName: moment()
    .format('dddd')
    .toUpperCase()
};

export default DateSelector;
