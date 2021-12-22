import React,{useState} from 'react';
import '../css/MainBlock.css';
import SubscriptionForm from './SubscriptionForm';

export const StateContext = React.createContext(false);

const MainBlock = () => {
const [isSub,setSub] = useState(false)
const vals = {isSub,setSub}
    return (
        <div className="main_block">
            <div className="inner_block">
                <StateContext.Provider value ={vals}>
                <SubscriptionForm  />
                </StateContext.Provider >
            </div>
        </div>
    )
}

export default MainBlock
