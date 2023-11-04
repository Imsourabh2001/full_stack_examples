import React from "react";
import { Button, Paper, Slide, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
const SDAlert=(props)=>{
    var trasitionType=Slide;
    var direction="left";

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
TransitionProps={{direction}}
transitionDuration={10000}
>
<Alert variant="filled" elevation={8} severity={props.alertWhat} onClose={props.closeState}>This is our own Component</Alert>
</Snackbar>
        )
}
const AppExample44=()=>{
const [showState,setShowState]=React.useState(false);
const openState=()=>{
    setShowState(true);
}
const closeState=()=>{
    setShowState(false);
}
    return(
    <div>
        <Paper>
            <Button type="filled" onClick={openState}>Click me</Button>
        <SDAlert
        showState={showState}
        duration={5000}
        closeState={closeState}
        verticalAlignment="top"
        horizontalAlignment="center"
        alertWhat="success"
        ></SDAlert>
        </Paper>
    </div>
)
}
export default AppExample44;