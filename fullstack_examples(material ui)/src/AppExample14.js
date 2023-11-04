import React from 'react';
const getEmployees=()=>{
    const promise=new Promise((resolve)=>{
        fetch("/employees").then((response)=>{
            return response.json();
        }).then((employees)=>{
            resolve(employees);
        });
    });
    return promise;
}
const AppExample14=()=>{
var promise=getEmployees();
promise.then((emp)=>{
    alert(JSON.stringify(emp));
})
return(
    <div>
        <h2>Data coming from server side... Heheheheh</h2>
    </div>
)
}
export default AppExample14;