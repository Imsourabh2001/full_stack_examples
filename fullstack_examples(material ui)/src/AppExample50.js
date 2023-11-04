import React from "react";
import {makeStyles} from '@material-ui/core/styles'
import { Button, Checkbox, Grid, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const myStyles=makeStyles((theme)=>{
    return({
        mainContainer:{margin: theme.spacing(3)}
    })
})

const cities=[
    {"city":"Agra"},
    {"city":"Ahmedabad"},
    {"city":"Bombay"},
    {"city":"Chennai"},
    {"city":"Indore"},
    {"city":"Kolkata"},
    {"city":"Shimla"},
    {"city":"Ujjain"}
]
const AppExample50=()=>{
    const classes=myStyles();
    const selectedCities=[];
    const buttonClicked=()=>{
        for(var i=0;i<selectedCities.length;i++){
            alert(selectedCities[i].city)
        }
    }
    const onCitiesCollectionChange=(...p)=>{
        if(p[2]=='select-option'){
            selectedCities.push(p[3].option)
        }
        else if(p[3]=='clear'&&p[2].length!=0){
            for(var i=0;i<selectedCities.length;i++){
                if(selectedCities[i].city==p[3].option.city){
                    selectedCities.splice(i,1);
                    break;
                }
            }
        }
        else selectedCities.splice(0,selectedCities.length)
    }
    return(
        <Grid container spacing={10} className={classes.mainContainer}>
            <Grid item>
                <Autocomplete
                id='city'
                options={cities}
                multiple
                disableCloseOnSelect
                style={{width: 500}}
                onChange={onCitiesCollectionChange}
                getOptionLabel={(obj)=>{return obj.city}}
                renderOption={(option,{selected})=>{return(
                    <React.Fragment>
                        <Checkbox checked={selected}></Checkbox>
                        {option.city}
                    </React.Fragment>
                )}}
                renderInput={(p)=>{
                    return(
                        <TextField {...p}
                        id="City"
                        label="Select Cities"
                        placeholder="Cities"
                        helperText="Select multiple Cities"
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
export default AppExample50;