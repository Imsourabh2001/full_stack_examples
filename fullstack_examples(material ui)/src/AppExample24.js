import React from "react";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const myStyles=()=>{
    return({
        mainContainer:{
            padding: "10px",
            flexGrow: 1,
            border: "1px solid red"
        }
    })
}
const AppExample24=withStyles(myStyles)(({classes})=>{
    return(
        <div className={classes.mainContainer}>
            <Grid container spacing={6}>
            <Grid item xs={3}>
                <Grid container spacing={4} direction="column">
                    <Grid item>
                        <Paper>1 - Ujjain</Paper>
                    </Grid>
                    <Grid item>
                        <Paper>2 - Indore</Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container spacing={4} direction="column">
                    <Grid item>
                        <Paper>3 - Pune</Paper>
                    </Grid>
                    <Grid item>
                        <Paper>4 - Mumbai</Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container spacing={4} direction="column">
                    <Grid item>
                        <Paper>5 - Dewas</Paper>
                    </Grid>
                    <Grid item>
                        <Paper>6 - Bhopal</Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container spacing={4} direction="column">
                    <Grid item>
                        <Paper>7 - Noida</Paper>
                    </Grid>
                    <Grid item>
                        <Paper>8 - Kanpur</Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container spacing={4} direction="column">
                    <Grid item>
                        <Paper>9 - Jabalpur</Paper>
                    </Grid>
                    <Grid item>
                        <Paper>10 - Itarsi</Paper>
                    </Grid>
                </Grid>
            </Grid>

            </Grid>    
        </div>
    )
});

export default AppExample24;