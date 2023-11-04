import React from 'react';
const produceFactorial=(num)=>{
    var promise=new Promise((resolve)=>{
        setTimeout(()=>{
            var e,f;
            e=f=1;
            while(e<=num)
            {
                f=f*e;
                e++;
            }
            resolve(f);
        },5000);
    });
    return promise;
}
const AppExample12=()=>{
    const buttonClickedHandler=()=>{
        var promise=produceFactorial(5);
        promise.then((factorial)=>{
            alert('Factorial is :'+factorial);
        })
        alert('Production of factorial is started');
    }
    return(
        <div>
            <h1>Concept of promise : Factorial calculation is done here</h1>
            <button type='button' onClick={buttonClickedHandler}>Click me</button>
        </div>
    );
}
export default AppExample12;