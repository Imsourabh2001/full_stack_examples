import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const lookAndFeel=()=>{
    return({
        mainContainer:{
            padding: "5px",
            margin: "5px",
            flexGrow: 1,
            border: "1px solid magenta"
        },
        paper:{
            margin: "5px",
            color: "red"
        }
    })

}
const AppExample21=withStyles(lookAndFeel)(({classes})=>{
    return(
        <div className={classes.mainContainer}>
            <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>2</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>3</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>4</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>5</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>6</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>7</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>8</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>9</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>10</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>11</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>12</Paper>
            </Grid>
           
            </Grid>
        </div>
    )
});

export default AppExample21;