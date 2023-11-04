import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField } from "@material-ui/core";
const myStyles=makeStyles((theme)=>{
    return({
        mainContainer:{margin: theme.spacing(2)}
    })
})

const AppExample48=()=>{
    const classes=myStyles();
    const [firstName,setFirstName]=React.useState("");
    const [isFirstNameInvalid,setIsFirstNameInvalid]=React.useState(false);
    const [firstNameHelperText,setFirstNameHelperText]=React.useState("")
    const onFirstNameChanged=(ev)=>{
        var val=ev.target.value;
        setFirstName(val);
        const v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
        var k=0;
        var invalid=false;
        while(k<val.length)
        {
            if(v.indexOf(val.charAt(k))==-1)
            {
                invalid=true;
                break;
            }
            k++;
        }
        if(invalid) setFirstNameHelperText("a-z A-Z OR SPACE")
        else setFirstNameHelperText("");
        setIsFirstNameInvalid(invalid);
    }
    const [lastName,setLastName]=React.useState("");
    const [isLastNameInvalid,setIsLastNameInvalid]=React.useState(false);
    const [lastNameHelperText,setLastNameHelperText]=React.useState("")
    const onLastNameChanged=(ev)=>{
        var val=ev.target.value;
        setLastName(val);
        const v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var k=0;
        var invalid=false;
        while(k<val.length)
        {
            if(v.indexOf(val.charAt(k))==-1)
            {
                invalid=true;
                break;
            }
            k++;
        }
        if(invalid) setLastNameHelperText("a-z A-Z")
        else setLastNameHelperText("");
        setIsLastNameInvalid(invalid);
    }
    return(
        <Grid container spacing={3} className={classes.mainContainer}>
            <Grid item>
                <TextField 
                id="first name"
                label='First Name'
                placeholder="Enter your First Name"
                helperText={firstNameHelperText}
                value={firstName}
                onChange={onFirstNameChanged}
                error={isFirstNameInvalid}
                variant="outlined"
                ></TextField>
            </Grid>
            <Grid item>
            <TextField 
                id="last name"
                label='Last Name'
                placeholder="Enter your Last Name"
                helperText={lastNameHelperText}
                value={lastName}
                onChange={onLastNameChanged}
                error={isLastNameInvalid}
                ></TextField>
            </Grid>
        </Grid>
    )
}
export default AppExample48;