import React from "react";
import { makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from "@material-ui/lab";
import Button from '@material-ui/core/Button';
const myStyles=makeStyles((theme)=>{
    return({
        mainContainer:{margin: theme.spacing(7)}
    })
})
const getRegions=()=>{
    var promise=new Promise((resolve,reject)=>{
        fetch("/regions").then((response)=>{ return response.json(); }).then((regions)=>{resolve(regions)});
    });
    return promise;
}
const AppExample49=()=>{
    React.useEffect(()=>{
        getRegions().then((regions)=>{ setRegions(regions)});
    },[])
    const classes=myStyles();
    const [username,setUsername]=React.useState("");
    const [password,setPassword]=React.useState("");
    const [region,setRegion]=React.useState("");
    const [regions,setRegions]=React.useState([]);
    const usernameChanged=(ev)=>{
        setUsername(ev.target.value);
    }
    const passwordChanged=(ev)=>{
        setPassword(ev.target.value);
    }
    const regionChanged=(ev,obj)=>{
        setRegion(obj.name);
    }
    const buttonClicked=()=>
    {
        alert(username+","+password+","+region)
    }
    return(
        <Grid container spacing={5} className={classes.mainContainer}>
            <Grid item>
                <TextField
                id="username"
                label="Username"
                placeholder="Enter name"
                variant="outlined"
                helperText="Set username to login"
                value={username}
                onChange={usernameChanged}
                ></TextField>
            </Grid>
            <Grid item>
            <TextField
                id="password"
                label="Password"
                placeholder="Enter password"
                variant="outlined"
                type="password"
                helperText="Set password to login"
                value={password}
                onChange={passwordChanged}
                ></TextField>
            </Grid>
            <Grid item>
                <Autocomplete
                id="region"
                options={regions}
                onChange={regionChanged}
                getOptionLabel={(obj)=>{return obj.name; }}
                renderInput={(p)=>{
                    return(
                        <TextField {...p}
                        label="Region"
                        variant="outlined"
                        helperText="Select your Region"
                        placeholder="Select Regions"
                        ></TextField>
                    )
                }}
                ></Autocomplete>
            </Grid>
            <Grid item>
                <Button variant="outlined" onClick={buttonClicked}>Click me</Button>
            </Grid>
        </Grid>
    )
}
export default AppExample49;