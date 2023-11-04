import React from "react";
import { makeStyles, Paper, Card, CardHeader, CardContent, CardMedia, CardActions, Typography, Avatar } from "@material-ui/core";
import NatureIcon from '@material-ui/icons/Nature';
const myStyles=makeStyles((theme)=>{
return({
    mainContainer:{
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    papar:{
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    card:{
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    cardContent:{
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        width : 400    
    },
    cardMedia:{
       
    }    
})
});
const AppExample41_2=()=>{
    const classes=myStyles();
    return(
        <div className={classes.mainContainer}>
            <Paper className={classes.paper}>
                <Typography variant="h2">Rojdi - Village</Typography>
                <Typography variant="h4">Feel the beauty of Nature around you</Typography>
                <Card className={classes.card}>
                    <CardHeader
                    title="My village"
                    subheader="Home"
                    avatar={
                        <Avatar><NatureIcon/></Avatar>
                    }
                    />
                    <CardContent className={classes.cardContent}>
                        Everything you need to know about my village, you will find here in the below video.
                    </CardContent>
                    <Card className={classes.card}>
                        <CardMedia 
                        className={classes.cardMedia}
                        component="video"
                        src="studentsVideo/rojdi.mp4"
                        controls
                        type="mp4"
                        ></CardMedia>
                    </Card>
                </Card>
            </Paper>
        </div>
    )
}
export default AppExample41_2;