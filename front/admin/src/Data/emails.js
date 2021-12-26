import csvDownload from 'json-to-csv-export'

export const FindBy = (objectArray,key) =>{
    let empt = [];
    objectArray.map(x=>x.email.includes(key)?empt.push(x):'')
    return empt;
}
export const domainList=(objectArray)=>{
    let empt = [];
    objectArray.map(x=>empt.push(x.email.substring(x.email.indexOf('@'),x.email.length+1)));
    let domains = [...new Set(empt)];
    return domains;
}
export const SortDate = (ObjArray) =>{
    ObjArray.sort((a,b)=>{
        let dateA = new Date(a.add_date);
        let dateB = new Date(b.add_date);
        return dateA - dateB;
    });
    return ObjArray;
}

export const PaginatedData =(shownEmails,a,b)=>{
     return shownEmails.slice(a,b);
}
export const SelectedList = (objList) =>{
let list = [];
objList.forEach(element => {
    element['checked'] = false;
    list.push(element);
});
return list;
}

export const DeleteSelected =(objArray)=>{
objArray.forEach(x=>{
    if(x.checked){
        fetch('http://localhost:81/Delete/',{
            method:'POST',
            headers: {
              'Content-Type':'application/json',
            },
            body: JSON.stringify({
                id:x.id
            })
            })
    }
})
};
export const GetAllData = () =>{
    fetch('http://localhost:81/Get/',{
      method: 'Get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
  }).then(resp=> resp.json()).then(data=>{
    return data;
  });
}
export const arrayCsv =(ObjList)=>{
let list = [];
ObjList.map(a=>a.checked?list.push({"email":a.email}):'');
return list;
};
export const csvDwnld = (data) =>{
    let uniq = [...new Map(data.map((item) => [item["email"], item])).values()];
   if(uniq.length>0){csvDownload(data)}
}

