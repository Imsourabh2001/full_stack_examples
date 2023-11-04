import React from "react";
import { makeStyles} from '@material-ui/core/styles'
import { Button, Grid, TextField, Checkbox } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
const myStyles=makeStyles((theme)=>{
return({
    mainContainer:{ margin: theme.spacing(3)}
})
})
const AppExample51=()=>{
    const classes=myStyles();
    const [selectedStudent,setSelectedStudent]=React.useState([]);
    const names=["Sourabh","Shubham","Sonali","Ayushi","Adarsh"];
    const [student,setStudent]=React.useState([]);
    React.useEffect(()=>{
        setStudent(names);
    },[])
    const onCollectionChange=(...p)=>{
        if(p[2]=='select-option')
        {
         selectedStudent.push(p[3].option)
        }else if(p[3]=='clear'&&p[2].length!=0){
            for(var i=0;i<selectedStudent.length;i++){
                if(selectedStudent[i]==p[3].option){
                    selectedStudent.splice(i,1)
                    break;
                }
            }
        }
        else selectedStudent.splice(0,selectedStudent.length)

    }
const buttonClicked=()=>{
    for(var i=0;i<selectedStudent.length;i++) alert(selectedStudent[i])
}
    return(
        <Grid container className={classes.mainContainer} spacing={5}>
            <Grid item>
                <Autocomplete
                id="name"
                options={student}
                multiple
                disableCloseOnSelect
                onChange={onCollectionChange}
                getOptionLabel={(n)=>{return n;}}
                style={{width: 400}}
                renderOption={(option,{selected})=>{
                    return(
                        <React.Fragment>
                            <Checkbox checked={selected}></Checkbox>
                            {option}
                        </React.Fragment>
                    )
                }}
                renderInput={(p)=>{
                    return(
                    <TextField {...p}
                    id='Name'
                    label="Select name"
                    variant="outlined"
                    >
                    </TextField>
                    )
                }}
                ></Autocomplete>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={buttonClicked}>Click me</Button>
            </Grid>
        </Grid>
    )
}
export default AppExample51;