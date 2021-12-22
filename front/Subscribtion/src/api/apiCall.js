const urlSend = "http://localhost:81/Post/";

export const SendDb =(email)=>{
fetch(urlSend,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(email)
}).then(resp=>{
    if(resp.status === 200){
        return true
    }
});
}