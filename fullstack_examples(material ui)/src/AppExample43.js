import React from "react";
import { Button, IconButton, Paper, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Alert } from "@material-ui/lab";
const AppExample43=()=>{
    const [showSnackbarOne,setShowSnackbarOne]=React.useState(false);
    const openSnackbarOne=()=>{
        setShowSnackbarOne(true);
    }
    const closeSnackbarOne=()=>{
        setShowSnackbarOne(false);
    } 
    const [showSnackbarTwo,setShowSnackbarTwo]=React.useState(false);
    const openSnackbarTwo=()=>{
        setShowSnackbarTwo(true);
    }
    const closeSnackbarTwo=()=>{
        setShowSnackbarTwo(false);
    }
return(
<div>
    <Paper>
        <Button variant="contained" onClick={openSnackbarOne}>Way One</Button>
        <Button variant="text" onClick={openSnackbarTwo}>Way Two</Button>
        <Snackbar
        open={showSnackbarOne}
        message="This is snackbar"
        anchorOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        onClose={closeSnackbarOne}
        autoHideDuration={5000}
        action={
            <IconButton color="inherit"><CloseIcon onClick={closeSnackbarOne}/></IconButton>
        }
        ></Snackbar>
        <Snackbar 
        open={showSnackbarTwo}
        onClose={closeSnackbarTwo}
        autoHideDuration={5000}
        anchorOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
        >
            <Alert elevation={8} variant="filled" severity="success" onClose={closeSnackbarTwo}>This is 2nd Snackbar</Alert>
        </Snackbar>
    </Paper>
</div>)
}
export default AppExample43;