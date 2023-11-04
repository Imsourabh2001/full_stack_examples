import React from "react";
import Button from '@material-ui/core/Button';
const SomethingBigger=(Whatever)=>{
    const stateFunction=()=>{
        alert("M.P.")
    }
return ()=>{
    return(
        <div>
            Some very cool stuff<br/>
            <Whatever  city="Ujjain" state={stateFunction}/>
        </div>
    )
}
}
const AppExample46=SomethingBigger((props)=>{
    const buttonClicked=()=>{
        alert(props.city)
        props.state()
    }
return(
    <Button variant="contained" onClick={buttonClicked}>Click me</Button>
)
})
export default AppExample46