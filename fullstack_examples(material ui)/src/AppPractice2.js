import React from "react";
const AppPractice2=()=>{
return(
    <div>
        <h1>Don't cry because it's over... Smile because it happend</h1>
        <div style={{display:'flex'}}>
            <div style={{padding:'10px',borderRight:'2px solid black'}}>
                <PlacementTypeComponent /><hr></hr>
                <SalaryComponent /><hr></hr>
            </div>
            <div style={{flexGrow:1 ,padding:'10px'}}>
                right
            </div>
        </div>
    </div>
)
}
const PlacementTypeComponent=()=>{
    return(
        <fieldset>
            <legend>Type</legend>
            <input type="checkbox"/>Internship<br></br>
            <input type="checkbox"/>Full Time<br></br>
        </fieldset>
    )
}
const SalaryComponent=()=>{
    return(
        <fieldset>
            <legend>Type</legend>
            <input type="checkbox"/>Monthly<br></br>
            <input type="checkbox"/>Yearly<br></br>
        </fieldset>
    )
}
export default AppPractice2;