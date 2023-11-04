import React from 'react'
const produceFactorial=(num,addressOfFunction)=>{
setTimeout(()=>{
var e,f;
e=f=1;
while(e<=num)
{
    f=f*e;
    e++;
}
addressOfFunction(f);
},5000);
}
const AppExample11=()=>{
    const buttonClickedHandler=()=>{
        produceFactorial(5,(fac)=>{
            alert('Factorial is : '+fac);
        })
        //Better Approach as control will go to next line.
        alert('Factorial production is started somewhere');
    }
return(
    <div>
        <h1>Produce factorial with better approach</h1>
        <button type='button' onClick={buttonClickedHandler}>Click me</button>
    </div>
)
}
export default AppExample11;