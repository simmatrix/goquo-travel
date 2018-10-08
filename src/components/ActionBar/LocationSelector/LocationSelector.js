import React from 'react';
import classes from './LocationSelector.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'antd';

const LocationSelector = () => {
  return (
    <Tooltip placement="bottom" title="For display only, not in requirement yet">
      <div className={classes.LocationSelectorContainer}>
        <div className={classes.Icon}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={'icon-color'} />
        </div>
        <div className={classes.Input}>SEARCH FOR YOUR DREAM DESTINATION</div>
      </div>
    </Tooltip>
  );
};

export default LocationSelector;
