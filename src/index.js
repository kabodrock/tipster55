import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';

//----------------------------- test ทำทีละหน้า ยังไม่ได้ link หน้า (ค่อยลบ) --------------------------------------------//
import Content from "./Content";
import Header from './Header';
import Headerall from './Header-all';
import TodayFreeTipster from './TodayFreeTipster';
import TodayAdvanceTipster from './TodayAdvanceTipster';
import TodayMasterTipster from './TodayMasterTipster';
import Promotion from './Promotion';
import TopGeneral from './TopGeneral';
import TopAdvance from './TopAdvance';
import TopMaster from './TopMaster';
import MySale from './MySale';
import ProfileSetting from './ProfileSetting';
import Register from './Register';
import MemberDashboard from './MemberDashboard';
import TipsterProfile from './TipsterProfile';
import SelectTipster from './SelectTipster';
import ItemsCart from './ItemsCart';
import Payment from './Payment';
//----------------------------- test ทำทีละหน้า ยังไม่ได้ link หน้า (ค่อยลบ) --------------------------------------------//

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TodayFreeTipster/>
  </React.StrictMode>,
  
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
  
//   document.getElementById('root')
// );

// const rootElement = document.getElementById("root");
//     ReactDOM.render(
//       <BrowserRouter>
//        <Switch>
//         <Route exact path="/" component={Header} />
//         <Route path="/Content" component={Content} />
//       </Switch>
//       </BrowserRouter>,
//       rootElement
//     );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
