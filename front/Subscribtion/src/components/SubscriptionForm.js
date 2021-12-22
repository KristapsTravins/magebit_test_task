import React,{useContext} from 'react';
import '../css/SubscriptionForm.css';
import SendSub from './SendSub';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Sucsess from './Sucsess';
import { StateContext } from './MainBlock';

const SubscriptionForm = () => {
const {isSub} = useContext(StateContext);
    return (
     <Router>
        <div className="subscribe_outer">
           <div className="subscribe_inner">
                <div className="subscribe_box">
                      {isSub?<Sucsess />:<SendSub/>}
                </div>
           </div>
        </div>
    </Router>
    )
}

export default SubscriptionForm
