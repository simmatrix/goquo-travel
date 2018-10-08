import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarTimes, faHandHoldingUsd, faHandPaper, faEye } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import classes from './HotelRoom.module.scss';
import formatCurrency from './../../../services/CurrencyFormatter';

const HotelRoom = props => {
  return (
    <React.Fragment>
      <div className={classes.HotelRoomContainer}>
        <div className={classes.HotelRoomHeader}>{props.room.name}</div>

        <div className={classes.HotelRoomContent}>
          <div className={classes.LeftPanel}>
            <table>
              <tbody>
                <tr>
                  <td width="40">
                    <FontAwesomeIcon icon={faHome} className={'icon-color'} />
                  </td>
                  <td width="150">ACCOMMODATION TYPE:</td>
                  <td>{props.room.accommodateText}</td>
                </tr>
                <tr>
                  <td width="40">
                    <FontAwesomeIcon icon={faCalendarTimes} className={'icon-color'} />
                  </td>
                  <td width="150">FREE CANCELLATION:</td>
                  <td>
                    {props.room.hasFreeCancellation ? 'YES' : 'NO'} &nbsp;
                    {props.room.hasFreeCancellation && <span>- BEFORE {props.room.cancelFreeBeforeDate}</span>}
                  </td>
                </tr>
                <tr>
                  <td width="40">
                    <FontAwesomeIcon icon={faHandHoldingUsd} className={'icon-color'} />
                  </td>
                  <td width="150">REFUNDABLE:</td>
                  <td>{props.room.isNonRefundable ? 'NO' : 'YES'}</td>
                </tr>
                <tr>
                  <td width="40">
                    <FontAwesomeIcon icon={faHandPaper} className={'icon-color'} />
                  </td>
                  <td width="150">CAN HOLD BOOKING:</td>
                  <td>{props.room.canHoldBooking ? 'YES' : 'NO'}</td>
                </tr>
                <tr>
                  <td width="40">
                    <FontAwesomeIcon icon={faEye} className={'icon-color'} />
                  </td>
                  <td width="150">ROOM VIEW:</td>
                  <td>{props.room.viewLabel}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={classes.RightPanel}>
            <div className={classes.UnitPrice}>{formatCurrency(props.room.totalPrice)} PER NIGHT</div>
            <button disabled={props.typing} className={props.typing ? classes.ChooseThisDisabled : classes.ChooseThis} onClick={() => props.updateSummary(props.roomTypeLabel, props.room.name, props.room.totalPrice)}>
              {props.typing ? 'TYPING...' : 'CHOOSE THIS'}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

HotelRoom.propTypes = {
  updateSummary: PropTypes.func,
  roomTypeLabel: PropTypes.string,
  room: PropTypes.object,
  typing: PropTypes.bool
};

export default HotelRoom;
