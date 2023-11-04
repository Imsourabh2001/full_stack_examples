import React from "react";
const AppExample16=()=>{
    const [slogan,setSlogan]=React.useState("Beyond your imagination");
    const [moto,setMoto]=React.useState("Ups-downs are part of life");
    React.useEffect(()=>{
        alert('Im executing');
    },[]);
    const buttonClickedHandler=(ev)=>{
        if(ev.currentTarget.getAttribute('id')==='S')
        {
            setSlogan("Think big, work hard, see your new Version")
        }
        else
        {
            setMoto("Regularity is key");
        }
    }
return(
    <div>
        <h1>Change the way you think</h1>
        <button type='button' onClick={buttonClickedHandler} id='S'>Next slogan</button><br></br>
        <button type='button' onClick={buttonClickedHandler} id='M'>Next moto</button>
        <SloganComponent slogan={slogan}/>
        <MotoComponent moto={moto}/>
    </div>
)
}
const SloganComponent=(props)=>{
    return(
        <div>{props.slogan}</div>
    )
}
const MotoComponent=(props)=>{
    return(
        <div>{props.moto}</div>
    )
}
export default AppExample16;