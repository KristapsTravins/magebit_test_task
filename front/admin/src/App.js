import './App.css';
import React,{useState, useEffect} from 'react';
import { EmailComp } from './components/EmailComp';
import { SelectComp } from './components/SelectComp';
import { domainList,SelectedList } from './Data/emails';


export const EmailContext = React.createContext([]);

function App() {
 
  const [emailList,setEmailList] = useState(null);
  const [shownEmails, setShownEmails] = useState('');
  const [domains, setDomains] = useState(null);
  const [render,setRerender] = useState(false);
  const [csvexp,setCsv] = useState([]);
  const emails = {emailList,setEmailList,shownEmails,setShownEmails,domains,setRerender,render,csvexp,setCsv};
  
  useEffect(()=>{
    fetch('http://localhost:81/Get/',{
      method: 'Get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
  }).then(resp=> resp.json()).then(data=>{
 
    setEmailList(SelectedList(data));
    setShownEmails(SelectedList(data))
    setDomains(domainList(data));
  });
  },[render])
  

  
  
  return (
    <div className="App">
      <div className='inner_block'>
        <EmailContext.Provider  value = {emails}>
            {domains && <SelectComp />}
            {shownEmails && <EmailComp />}
        </ EmailContext.Provider>
      </div>
    </div>
  );
}

export default App;
