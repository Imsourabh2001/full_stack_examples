import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from "@material-ui/core";

const myStyles=makeStyles((theme)=>{
    return(
        {
            mainContainer: {minWidth: 200},
        }
    )
});
const getStates=()=>{
    var promise=new Promise((resolve,reject)=>{
        fetch("/states").then((response)=>{return response.json()}).then((states)=>{resolve(states)})
    });

    return promise;
}
const getCities=()=>{
    var promise=new Promise((resolve,reject)=>{
        fetch("/cities").then((response)=>{return response.json()}).then((cities)=>{resolve(cities)})
    });

    return promise;
}
const AppExample53=()=>{
    const classes=myStyles();
    const [states,setStates]=React.useState([]);
    const [cities,setCities]=React.useState([]);
    const [selectedCities,setSelectedCities]=React.useState([]);
    const [selectedState,setSelectedState]=React.useState("");
    const [selectedCity,setSelectedCity]=React.useState("");
    React.useEffect(()=>{
        getStates().then((states)=>{
            setStates(states);
        })
        getCities().then((cities)=>{setCities(cities)})
    },[])
    const stateChanged=(ev)=>{
    var c=[];
     const val=ev.target.value;
    cities.forEach((city)=>{
        if(city.id===val){c.push(city);}
    })
    states.forEach((state)=>{
        if(state.id===val){
            setSelectedState(state.name)
        }
    })
    setSelectedCities(c);
    }
    const cityChanged=(ev)=>{
        var val=ev.target.value;
        selectedCities.forEach((city)=>{
            if(city.code===val){
                setSelectedCity(city.name);
            }

        })
    }
    const buttonClicked=()=>{
        alert(selectedState+","+selectedCity)
    }
    return(
        <Grid container spacing={5} direction="column">
            <Grid item>
                <FormControl className={classes.mainContainer} >
                    <InputLabel htmlFor="states">Select states</InputLabel>
                    <Select
                    id="states"
                    onChange={stateChanged}
                    >
                    <MenuItem value={0}>Select your state</MenuItem>
                    {
                        states.map((state)=>{
                            return(<MenuItem key={state.id} value={state.id}>{state.name}</MenuItem>)
                        })
                    } 
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
            <FormControl className={classes.mainContainer} >
                    <InputLabel htmlFor="cities">Select Cities</InputLabel>
                    <Select
                    id="cities"
                    onChange={cityChanged}
                    >
                    <MenuItem value={0}>Select your City</MenuItem>
                    {
                        selectedCities.map((city)=>{
                            return(<MenuItem key={city.code} value={city.code}>{city.name}</MenuItem>)
                        })
                    } 
                    </Select>
                </FormControl>
            </Grid>
            <Button color="primary" onClick={buttonClicked}>Click me</Button>
        </Grid>
    )
}
export default AppExample53