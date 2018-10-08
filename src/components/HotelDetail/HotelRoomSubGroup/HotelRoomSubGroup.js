import React from 'react';
import classes from './HotelRoomSubGroup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCoffee } from '@fortawesome/free-solid-svg-icons';
import HotelRoom from './../HotelRoom/HotelRoom';
import PropTypes from 'prop-types';

const HotelRoomSubGroup = props => {
  return (
    <React.Fragment>
      <div className={classes.HotelRoomSubGroupContainer}>
        <div className={classes.SubGroupHeader}>
          <div className={classes.BedTypeLabelWrapper}>
            <div className={classes.BedTypeLabelIcon}>
              <FontAwesomeIcon icon={faBed} className={'icon-color'} />
            </div>
            <div className={classes.BedTypeLabel}>
              <div className={props.subGroup.bedTypeLabel.indexOf('Double') !== -1 ? classes.BedTypeLabelItemActive : classes.BedTypeLabelItem}>DOUBLE</div>
              <div className={props.subGroup.bedTypeLabel.indexOf('Twin') !== -1 ? classes.BedTypeLabelItemActive : classes.BedTypeLabelItem}>TWIN</div>
              <div className={props.subGroup.bedTypeLabel.length === 0 ? classes.BedTypeLabelItemActive : classes.BedTypeLabelItem}>N/A</div>
            </div>
          </div>

          <div className={classes.BoardCodeDescriptionWrapper}>
            <div className={classes.BoardCodeDescriptionWrapperIcon}>
              <FontAwesomeIcon icon={faCoffee} className={'icon-color'} />
            </div>
            <div className={classes.BoardCodeDescription}>
              <div className={props.subGroup.boardCodeDescription === 'Room Only' ? classes.BoardCodeDescriptionItemActive : classes.BoardCodeDescriptionItem}>ROOM ONLY</div>
              <div className={props.subGroup.boardCodeDescription === 'Breakfast' ? classes.BoardCodeDescriptionItemActive : classes.BoardCodeDescriptionItem}>BREAKFAST</div>
              <div className={props.subGroup.boardCodeDescription === 'All Inclusive' ? classes.BoardCodeDescriptionItemActive : classes.BoardCodeDescriptionItem}>ALL INCLUSIVE</div>
            </div>
          </div>
        </div>
        <div className={classes.RoomList}>
          {props.subGroup.rooms.map((room, key) => {
            return <HotelRoom key={key} updateSummary={props.updateSummary} roomTypeLabel={props.roomTypeLabel} room={room} typing={props.typing} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

HotelRoomSubGroup.propTypes = {
  updateSummary: PropTypes.func,
  roomTypeLabel: PropTypes.string,
  subGroup: PropTypes.object,
  typing: PropTypes.bool
};

export default HotelRoomSubGroup;
