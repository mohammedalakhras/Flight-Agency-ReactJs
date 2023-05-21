import classes from './MainFileForDetails.module.css';
import DetailsOfPerson from './Details';
import React, { Component } from 'react';
export default function MainFileForDetails(props) {
  return (
    <div className={classes.body}>
      <DetailsOfPerson setFinish={props.setFinish} />
    </div>
  );
}
