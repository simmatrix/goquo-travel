import React from 'react';
import classes from './NotFound.module.scss';
import { Link } from 'react-router-dom';
import Header from './../Header/Header';
import ActionBar from './../ActionBar/ActionBar';

const NotFound = () => {
  return (
    <React.Fragment>
      <Header />
      <ActionBar />
      <div className={classes.NotFoundContainer}>
        <h1 className={classes.Title}>This page has gone off the grid</h1>
        <h2>
          We can't find the page that you are looking for. Perhaps you have keyed in the wrong URL? You may return to the <Link to="/">main page</Link>.
        </h2>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
