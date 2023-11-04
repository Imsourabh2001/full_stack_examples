import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const produceFactorial=(num)=>{
    var promise=new Promise((resolve)=>{
        setTimeout(()=>{
            var e,f;
            e=f=1;
            while(e<=num){
                f=f*e;
                e++
            }
            resolve(f);
        },8000)
    });
    return promise;
}
const AppExample13=()=>{
    const [factorial,setFactorial]=React.useState(0);
    const [jobStarted,setJobStarted]=React.useState(false);
    const [processingStarted,setProcessingStarted]=React.useState(false);
    const buttonClickedHandler=()=>{
        setJobStarted(true);
        setProcessingStarted(true);
        produceFactorial(5).then((f)=>{
            setFactorial(f);
            setProcessingStarted(false);
        })
    }
return(
    <div>
        <h2>Hello welcome to our site for printing your factorial</h2>
        <br></br>
        <button type='button' onClick={buttonClickedHandler}>Click me</button><br></br><br></br>
        { jobStarted && "Factorial : "}
        {jobStarted && factorial}<br></br>


        { jobStarted  && processingStarted && <FontAwesomeIcon icon={faSpinner} size="5x" pulse />}
    </div>
)
}
export default AppExample13;
