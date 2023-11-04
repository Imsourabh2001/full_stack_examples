import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const lookAndFeel=()=>{
    return({
        mainContainer:{
            padding: "10px",
            margin: "10px",
            flexGrow: 1,
            border: "1px solid black"
        },
        paper:{
            margin: "5px",
            color: "red"
        }
    })
}
const AppExample22=withStyles(lookAndFeel)(({classes,justify})=>{
    return(
        <div className={classes.mainContainer}>
            <Grid container spacing={4}>
              
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Grid container justifyContent="flex-end">
                        <Grid item><Chip label="1"></Chip></Grid>
                        <Grid item><Chip label="2"></Chip></Grid>
                        <Grid item><Chip label="3"></Chip></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Grid container justifyContent="space-around">
                        <Grid item><Chip label="4"></Chip></Grid>
                        <Grid item><Chip label="5"></Chip></Grid>
                        <Grid item><Chip label="6"></Chip></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Grid container justifyContent="space-between">
                        <Grid item><Chip label="7"></Chip></Grid>
                        <Grid item><Chip label="8"></Chip></Grid>
                        <Grid item><Chip label="9"></Chip></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Grid container justifyContent="center">
                        <Grid item><Chip label="10"></Chip></Grid>
                        <Grid item><Chip label="11"></Chip></Grid>
                        <Grid item><Chip label="12"></Chip></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Grid container justifyContent="flex-start">
                        <Grid item><Chip label="13"></Chip></Grid>
                        <Grid item><Chip label="14"></Chip></Grid>
                        <Grid item><Chip label="15"></Chip></Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
});

export default AppExample22;