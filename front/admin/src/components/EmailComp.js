import React,{useContext,useState} from 'react'
import { EmailContext } from '../App'
import {arrayCsv } from '../Data/emails';

export const EmailComp = () => {
    const emails = useContext(EmailContext);
    const [FromTo,setFromTo] = useState([0,10]);

    return (
        <div className='content_block'>
        <table>
            <thead>
        <tr>
            <th>EMAIL</th>
            <th>DATE </th>
        </tr>
        </thead>
        <tbody>
            {emails.shownEmails.slice(FromTo[0],FromTo[1]).map(x=>{
                return <tr key={x.id}>
                    <td>{x.email}</td>
                    <td>{x.add_date}</td>
                    <td><input type="checkbox" value={x.id} onChange={()=>{
                        x.checked = !x.checked;
                      
                        emails.setShownEmails([]);
                        setTimeout(()=>emails.setShownEmails(emails.shownEmails),0.1);
                        emails.setCsv(arrayCsv(emails.emailList));

                    }}  checked={x.checked} /></td>
                </tr>
            })}
        </tbody>
        </table>
        {
              Array(Math.ceil(emails.shownEmails.length/10)).fill().map((x,i)=>{
                
                return emails.shownEmails.length/10>1?< button key={i} onClick={()=>{
                    setFromTo([i===0?0:i*10,(i+1)*10]);
                }}>{i+1}</button>:<></>
            })
            
           }
        </div>
    )
}
