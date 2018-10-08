import React from 'react';
import classes from './HotelRoomMainGroup.module.scss';
import HotelRoomSubGroup from './../HotelRoomSubGroup/HotelRoomSubGroup';
import PropTypes from 'prop-types';

const HotelRoomMainGroup = props => {
  return (
    <React.Fragment>
      <div className={'HotelRoomMainGroupContainer'}>
        <div className={classes.Title}>{props.group.roomTypeLabel}</div>
        {props.group.rooms.map((subGroup, key) => {
          return <HotelRoomSubGroup key={key} updateSummary={props.updateSummary} roomTypeLabel={props.group.roomTypeLabel} subGroup={subGroup} typing={props.typing} />;
        })}
      </div>
    </React.Fragment>
  );
};

HotelRoomMainGroup.propTypes = {
  updateSummary: PropTypes.func,
  group: PropTypes.object,
  typing: PropTypes.bool
};

export default HotelRoomMainGroup;
