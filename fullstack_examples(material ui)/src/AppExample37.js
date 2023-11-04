import { Button, Checkbox, FilledInput, FormControlLabel, FormGroup, FormLabel, InputAdornment, MenuItem, OutlinedInput, Radio, RadioGroup, Switch } from "@material-ui/core";
import React from "react";
import Select from "@material-ui/core/Select";
import { Search } from "@material-ui/icons";

const AppExample37=()=>{
    const searchButtonClicked=()=>{
        alert('Searching')
    }
    const saveButtonClicked=()=>{
        alert('Saving data')
    }
return(
    <>
    <FormGroup>
        <FormLabel>First Name</FormLabel>
        <OutlinedInput placeholder="Enter first name" />
    </FormGroup>
    <FormGroup>
        <FormLabel>Last Name</FormLabel>
        <FilledInput placeholder="Enter last name"></FilledInput>
    </FormGroup>
    <FormGroup>
        <FormLabel>Address</FormLabel>
        <OutlinedInput multiline="true" rows={5}></OutlinedInput>
    </FormGroup>
    <FormGroup>
        <FormLabel>City</FormLabel>
        <Select defaultValue={101}>
            <MenuItem value={101}>Ujjain</MenuItem>
            <MenuItem value={102}>Indore</MenuItem>
            <MenuItem value={103}>Dewas</MenuItem>
            <MenuItem value={104}>Stana</MenuItem>
        </Select>
    </FormGroup>
    <FormGroup>
        <FormLabel>Date of Birth</FormLabel>
        <OutlinedInput type="date"></OutlinedInput>
    </FormGroup>
    <FormGroup>
        <FormLabel>Time to come</FormLabel>
        <OutlinedInput type="time"></OutlinedInput>
    </FormGroup>
    <FormGroup>
        <FormLabel>Month of Join</FormLabel>
        <OutlinedInput type="month"></OutlinedInput>
    </FormGroup>
    <FormGroup>
        <FormLabel>Week of leave</FormLabel>
        <OutlinedInput type="week"></OutlinedInput>
    </FormGroup>
    <FormGroup>
        <FormLabel>Salary</FormLabel>
        <OutlinedInput type="number" inputProps={{min: 100000, max:500000}}></OutlinedInput>
    </FormGroup>
    <FormGroup>
        <FormLabel>Password</FormLabel>
        <OutlinedInput type="password"></OutlinedInput>
    </FormGroup>
    <FormGroup>
        <FormLabel>Upload pic</FormLabel>
        <OutlinedInput type="file"></OutlinedInput>
    </FormGroup>
    <FormGroup>
        <FormLabel>Is Indian</FormLabel>
        <Checkbox />
    </FormGroup>
    <FormControlLabel label='Do you like coding?' labelPlacement="end" value='Y' control={<Checkbox/>}>
    </FormControlLabel>
    <FormGroup>
        <FormLabel>Gender</FormLabel>
        <RadioGroup>
            <FormControlLabel label='Male' value='M' labelPlacement='end' control={<Radio />}></FormControlLabel>
            <FormControlLabel label='Female' value='F' labelPlacement='end' control={<Radio />}></FormControlLabel>
        </RadioGroup>
    </FormGroup>
    <FormGroup>
        <FormLabel>Education</FormLabel>
        <OutlinedInput 
        endAdornment={<InputAdornment><Search onClick={searchButtonClicked}/></InputAdornment>}></OutlinedInput>
    </FormGroup>
    <FormGroup>
        <FormLabel>Send Promotional Mail</FormLabel>
        <Switch/>
    </FormGroup>
    <FormGroup>
        <Button variant="filled" onClick={saveButtonClicked}>Save</Button>
    </FormGroup>
    </>
)
}
export default AppExample37;