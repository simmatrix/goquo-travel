import React from 'react';
import classes from './ActionBar.module.scss';
import LocationSelector from './LocationSelector/LocationSelector';
import DateSelector from './DateSelector/DateSelector';
import OccupantSelector from './OccupantSelector/OccupantSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { Tooltip, message } from 'antd';

const demoMessage = () => {
  message.warning('For display only, not in requirement');
};

const ActionBar = () => {
  const checkInDate = moment();
  const checkInSelectedDate = checkInDate.format('MMMM DD, YYYY').toUpperCase();
  const checkInDayName = checkInDate.format('dddd').toUpperCase();

  const checkOutDate = moment().add(7, 'days');
  const checkOutSelectedDate = checkOutDate.format('MMMM DD, YYYY').toUpperCase();
  const checkOutDayName = checkOutDate.format('dddd').toUpperCase();

  return (
    <React.Fragment>
      <div className={classes.ActionBarMobileContainer} onClick={demoMessage}>
        <div className={classes.ItemTopWrapperMobile}>
          <div className={classes.ItemLocationSelectorMobile}>JOHOR BAHRU</div>
          <div className={classes.ItemRoomSelectorMobile}>1 ROOM, 2 ADULTS</div>
        </div>

        <div className={classes.ItemBottomWrapperMobile}>
          {/* Check-in Date */}
          <div className={classes.ItemDateSelectorMobileLeft}>
            <div className={classes.ItemDateSelectorMobileIcon}>
              <FontAwesomeIcon icon={faCalendarAlt} className={'icon-color'} />
            </div>
            <div className={classes.ItemDateSelectorMobileInputWrapper}>
              <div className={classes.ItemDateSelectorMobileDate}>{checkInSelectedDate}</div>
              <div className={classes.ItemDateSelectorMobileDayName}>{checkInDayName}</div>
            </div>
          </div>

          {/* Check-out Date */}
          <div className={classes.ItemDateSelectorMobileRight}>
            <div className={classes.ItemDateSelectorMobileIcon}>
              <FontAwesomeIcon icon={faCalendarAlt} className={'icon-color'} />
            </div>
            <div className={classes.ItemDateSelectorMobileInputWrapper}>
              <div className={classes.ItemDateSelectorMobileDate}>{checkInSelectedDate}</div>
              <div className={classes.ItemDateSelectorMobileDayName}>{checkInDayName}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ActionBarDesktopContainer}>
        <div className={classes.ItemLocationSelector}>
          <LocationSelector />
        </div>
        <div className={classes.ItemDateSelector}>
          <DateSelector selectedDate={checkInSelectedDate} selectedDayName={checkInDayName} />
        </div>
        <div className={classes.ItemDateSelector}>
          <DateSelector selectedDate={checkOutSelectedDate} selectedDayName={checkOutDayName} />
        </div>
        <div className={classes.ItemOccupantSelector}>
          <OccupantSelector />
        </div>
        <Tooltip placement="bottom" title="For display only, not in requirement yet">
          <div className={classes.ItemSearchButton}>SEARCH</div>
        </Tooltip>
      </div>
    </React.Fragment>
  );
};

export default ActionBar;
