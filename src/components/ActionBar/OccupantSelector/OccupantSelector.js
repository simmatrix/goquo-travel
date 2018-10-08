import React from 'react';
import classes from './OccupantSelector.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'antd';

const OccupantSelector = props => {
  return (
    <Tooltip placement="bottom" title="For display only, not in requirement yet">
      <div className={classes.OccupantSelectorContainer}>
        <div className={classes.Icon}>
          <FontAwesomeIcon icon={faUsers} className={'icon-color'} />
        </div>
        <div className={classes.Input}>
          <div className={classes.TotalOccupants}>2 ADULTS, 1 CHILDREN</div>
          <div className={classes.TotalRooms}>1 ROOM</div>
        </div>
      </div>
    </Tooltip>
  );
};

export default OccupantSelector;
