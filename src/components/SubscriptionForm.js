import React from 'react';
import '../css/SubscriptionForm.css';
import SendSub from './SendSub';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sucsess from './Sucsess';

const SubscriptionForm = () => {
    return (
     <Router>
        <div className="subscribe_outer">
           <div className="subscribe_inner">
                <div className="subscribe_box">
                        <Switch>
                            <Route exact path="/">
                                <SendSub />
                            </Route>
                            <Route exact path="/a">
                               <Sucsess />
                            </Route>
                        </Switch> 
                </div>
           </div>
        </div>
    </Router>
    )
}

export default SubscriptionForm
