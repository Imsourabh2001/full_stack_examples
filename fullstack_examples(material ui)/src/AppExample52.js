import React from "react";
import {makeStyles} from '@material-ui/core/styles'
import ChipInput from 'material-ui-chip-input';
import { Button } from "@material-ui/core";

const myStyles=makeStyles((theme)=>{
    return({
        mainContainer:{margin: theme.spacing(5)}
    })
});
const addChips=(json)=>{
    var promise=new Promise((resolve,reject)=>{
    fetch("/chips",{
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(json)
    }).then((response)=>{return response.json()}).then((responseJSON)=>{ resolve(responseJSON)});
    
})
return promise;
}
const AppExample52=()=>{
    const [member,setMember]=React.useState([])
    const addMember=(chip)=>{
        var m=[...member,chip];
        setMember(m);
    }
    const removeMember=(chip,index)=>{
        var m=member.slice(0,index).concat(member.slice(index+1))
        setMember(m);
    }
    const buttonClicked=()=>{
        var j=[];
        for(var i=0;i<member.length;i++){
            j.push({"name":member[i]})
        }
        addChips(j).then((responseJSON)=>{
            if(responseJSON.success===true)alert("Success fully added");
            else alert("Some problem");
        })
    }

const classes=myStyles();
return(
    <div className={classes.mainContainer}>
        <ChipInput
        size="medium"
        helperText="Enter name and press enter key"
        value={member}
        onAdd={addMember}
        onDelete={removeMember}
        ></ChipInput>
        <Button variant="contained" onClick={buttonClicked}>Click mee</Button>
    </div>
)
}
export default AppExample52;