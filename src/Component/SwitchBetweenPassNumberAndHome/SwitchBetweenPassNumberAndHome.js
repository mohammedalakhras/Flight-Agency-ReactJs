import React, { Component } from 'react';
import classes from './SwitchBetweenPassNumberAndHome.module.css';
export default function SwitchBetweenPassNumberAndHome(props) {
  return (
    <div>
      <h1> تم تسجيل مقاعدك بنجاح :)</h1>
      <div> 
        <button>الذهاب الى الصفحة الرئيسية</button>  
        <button>معرفة أرقام التذاكر</button>  
      </div>
    </div>
  );
}
