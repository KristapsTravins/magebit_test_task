import React from 'react'
import '../css/MainBlock.css';
import SubscriptionForm from './SubscriptionForm';

const MainBlock = () => {
    return (
        <div className="main_block">
            <div className="inner_block">
                <SubscriptionForm  />
            </div>
        </div>
    )
}

export default MainBlock
