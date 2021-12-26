import React,{useContext} from 'react'
import { EmailContext } from '../App';
import { FindBy,SortDate,DeleteSelected,csvDwnld} from '../Data/emails';

export const SelectComp = () => {
    const emails = useContext(EmailContext);
    
   
   
    return (
        <div className='sort_block'>
            <div>
            <label>Search:</label>
            <input type="text" placeholder='Search For Email' onChange={e =>emails.setShownEmails(FindBy(emails.emailList,e.target.value))}/>
            <div className='sortBy'>
               
            </div>
            <div className='sortBtns'>
                <button onClick={()=>{
                    emails.setShownEmails([]);
                    setTimeout(()=>emails.setShownEmails(SortDate(emails.shownEmails)),0.1);
                }}>Sort By Date</button>
            </div>
            <div className='delete'>
                <button onClick={()=>
                { 
                    DeleteSelected(emails.emailList);
                    emails.setRerender(!emails.render);
                }}>Delete selected</button>
                <button onClick={()=>csvDwnld(emails.csvexp)}>export csv</button>
            </div>
            </div>
            
            <div className='emailBox'>
            {emails.domains.map(x=>{
                return(
                <div key={x} className='emailBtns'>
                <div onClick={()=>emails.setShownEmails(FindBy(emails.emailList,x))}><label>{x}</label></div>
            </div> 
                )
            })}
            </div>
            
            
        </div> 
    )
}
