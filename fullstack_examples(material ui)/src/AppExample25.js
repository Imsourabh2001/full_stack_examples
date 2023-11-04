import React from "react";
import { WithStyles, withStyles } from "@material-ui/core";

const myStyles=()=>{
    return({
        mainContainer:{
            flexGrow: 1,
            color: "blue"
        }
    })
}
const AppExample25=({classes})=>{
    return(
        <div className={classes.mainContainer}>
            <h1>Heading : Think big</h1>
        </div>
    )
}

export default withStyles(myStyles)(AppExample25);