import React from "react";
import { Button, Paper, Slide, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
const SDAlert=(props)=>{
    var trasitionType=Slide;
    return(
<Snackbar 
open={props.showState}
autoHideDuration={props.duration}
onClose={props.closeState}
action={{
    vertical:props.verticalAlignment,
    horizontal:props.horizontalAlignment
}}
TransitionComponent={trasitionType}
onExit={props.onExit}
//transitionDuration={10000}
>
<Alert variant="filled" elevation={8} severity={props.alertWhat} onClose={props.closeState}>{props.message}</Alert>
</Snackbar>
        )
}
const AppExample44=()=>{
    const[count,setCount]=React.useState(0);
const [showState,setShowState]=React.useState(false);
const [messageQueue,setMessageQueue]=React.useState([]);
const [message,setMessage]=React.useState("");
const addMessageToQueue=()=>{
    var m=count+1;
    setCount(m);
    var j=[...messageQueue,`Message number ${m}`];
    setMessageQueue(j);
    if(j.length>0)
    {
        setMessage(j[0]);
    }
    if(!showState)
    {
        setShowState(true);
    }
}
const closeState=()=>{
    setShowState(false);
}
const onExit=()=>{
    var b,c;
    [b,...c]=messageQueue;
    setMessageQueue(c);
    if(c.length>0)
    {
        setMessage(c[0])
        setShowState(true);
    }
}
    return(
    <div>
        <Paper>
            <Button type="filled" onClick={addMessageToQueue}>Click me {count}</Button>
        <SDAlert
        showState={showState}
        duration={5000}
        closeState={closeState}
        verticalAlignment="top"
        horizontalAlignment="center"
        alertWhat="success"
        message={message}
        onExit={onExit}
        ></SDAlert>
        </Paper>
    </div>
)
}
export default AppExample44;