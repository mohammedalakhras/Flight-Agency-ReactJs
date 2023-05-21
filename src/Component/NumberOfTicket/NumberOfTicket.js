import React, { Component } from 'react';
import classes from './NumberOfTicket.module.css';
import Traveling from './Traveling';
export default function NumberOfTicket() {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.rectangular}>
          <div className={classes.title}>: أرقام التذاكر </div>
          <Traveling />
        </div>
        <button className={classes.next_Review}>التالي</button>
      </div>
    </div>
  );
}
