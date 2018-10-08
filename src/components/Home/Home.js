import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.scss';
import Header from './../Header/Header';
import ActionBar from './../ActionBar/ActionBar';
import { Tooltip } from 'antd';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <ActionBar />
      <div className={classes.HomeContainer}>
        <h1 className={classes.Title}>GoQuo's Assignment</h1>

        <h2>This site is being carefully crafted out with ReactJS library to meet the requirement of GoQuo's assignment, for their upcoming online travel booking platform as well. Kindly view in both desktop and mobile.</h2>
        <h2>Task: Given a test JSON input file, which contains a list of rooms belongs to a particular hotel, grouped them by room types and display them up.</h2>

        <Link to="/hotel/FR37525">
          <Tooltip placement="top" title="For this demo purpose, you would be directly linked to the hotel with ID FR37525">
            <div className={classes.ViewNow}>VIEW NOW</div>
          </Tooltip>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Home;
