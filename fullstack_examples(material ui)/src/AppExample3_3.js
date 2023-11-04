import React from 'react';
const AppExample3_3=()=>{
    const [text,setText]=React.useState("");
    const justDoIt=(ev)=>{
        setText(ev.currentTarget.value);
    }
return(
    <div>
        <h1>Welcome to this page</h1>
        <SampleComponent text={text} justDo={justDoIt} />
    </div>
)
}
const SampleComponent=(props)=>
{
    const changeHandler=(ev)=>{
    props.justDo(ev);
    }
    return(
    <div>
            <h1>Tell whatever you want. We Will Print it for you.</h1><hr></hr>
            Here it is : <input type='text' onChange={changeHandler}></input><hr></hr>
            <br></br><br></br>
            <b> You are saying : {props.text}</b>
    </div>
    );
}
export default AppExample3_3;