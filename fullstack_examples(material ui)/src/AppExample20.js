import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const stylesGenerator=()=>{
    return({
        "mainContainer":{
            width : "500px",
            height : "400px",
            padding : "10px",
            margin : "10px",
            border : "1px solid black"
        },
        "mainHeading":{
            color: "orange",
            backgroundColor: "black",
            fontSize: "30pt",
            fontWeight: "bold"
        },
        "subHeading":{
            color: "purple",
            backgroundColor: "black",
            fontSize: "20pt",
            fontWeight: "bold"
        }
    })
}

const AppExample20=withStyles(stylesGenerator)(({classes})=>{
    return(
        <div className={classes.mainContainer}>
        <div className={classes.mainHeading}>Hello guys welcome to page </div><br></br>
        <div className={classes.subHeading}>This is smaller heading</div>
        <Slogan heading></Slogan>  
       </div>
    )
});
const Slogan=({heading})=>{
    if(heading) return(
        <div>This is div</div>
        )
        else return(
            <h2>This is heading </h2>
        )

}
export default AppExample20;
//heading property will be treated as boolean type and default value is true
