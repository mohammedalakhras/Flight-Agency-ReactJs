import React  from 'react';
import classes from './Traveling.module.css';

const Traveling = () => {
  return (
    <>
      <div className={classes.traveling_container}>
      <div className={classes.traveling}>
       : المسافر 1 
      </div> 
      <div className={classes.input_traveling}>
        <input type="text" placeholder="هنا رقم التذكرة" />
      </div>
      </div>
     
    </>
  )
}

export default Traveling;