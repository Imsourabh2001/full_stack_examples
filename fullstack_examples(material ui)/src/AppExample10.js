import React from 'react';
const produceFactorial=(num)=>{
    var e,f;
    e=f=1;
    while(e<=num)
    {
        f=f*e;
        e++;
    }
    return f;
}
const AppExample10=()=>{
    const buttonClickHandler=()=>{
        var factorial=produceFactorial(5);
            //control will move to next line only when produceFactorial methods completes. Till then waiting is done
        alert('Factorial is : '+factorial);
    }
return(
    <div>
        <h1>Factorial is being calculated here</h1>
        <button type='button' onClick={buttonClickHandler}>Click me</button>
    </div>
)
}

export default AppExample10;