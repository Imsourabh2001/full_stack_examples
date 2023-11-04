import React from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Paper, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import VideoCallIcon  from "@material-ui/icons/VideoCall";
import ChatIcon from '@material-ui/icons/Chat';
const myStyles=makeStyles((theme)=>{
    return({
        mainContainer:{
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        paper:{
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        card:{
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            width: "600px"
        },
        cardContent:{
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        cardMedia:{
            width: "400px",
            height: "600px"
        }
    })
});
const AppExample41=()=>{
    const classes=myStyles();
    return(
        <div className={classes.mainContainer}>
            <Paper className={classes.paper}>
                <Typography variant="h1">Dubey Company</Typography>
                <Typography variant="h3">Keep working hard</Typography>
                <Card className={classes.card}>
                    <CardHeader 
                    title='Sourabh Dubey'
                    subheader='UEC Ujjain'
                    avatar={
                        <Avatar><PersonIcon/></Avatar>
                    }
                    />
                    <CardContent>
                        He will be doing some paid internship in near Future.
                    </CardContent>
                    <CardActions>
                        <IconButton>
                         <ChatIcon/> 
                         </IconButton>
                         <IconButton>
                         <VideoCallIcon/>  
                        </IconButton>
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} image='studentsImage/srb.png'>

                    </CardMedia>
                </Card>
            </Paper>
        </div>
    )
}
export default AppExample41;