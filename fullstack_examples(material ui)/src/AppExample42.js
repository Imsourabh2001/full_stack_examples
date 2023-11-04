import React from "react";
import { makeStyles, Card, CardActions, CardContent, CardHeader, CardMedia, Paper, Grid, OutlinedInput, InputAdornment, List, ListItem, ListItemText, ListSubheader, Avatar, IconButton, Typography, Divider } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from "@material-ui/icons/Chat";
import VideoCallIcon from "@material-ui/icons/VideoCall";
const myStyles = makeStyles((theme) => {
    return (
        {
            mainContainer: {
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2)
            },
            paper: {
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                paddingTop: theme.spacing(2),
                paddingBottom: theme.spacing(2)
            },
            card: {
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                paddingTop: theme.spacing(2),
                paddingBottom: theme.spacing(2),
                width: "500px"
            },
            cardMedia: {
                width: "400px",
                height: "500px"
            },
            grid: {
                borderRight: "2px solid gray",
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                paddingTop: theme.spacing(2),
                paddingBottom: theme.spacing(2)
            }

        }
    )
})
const getStudents = () => {
    var promise = new Promise((resolve, reject) => {
        fetch("/students").then((response) => { return response.json() }).then((students) => { resolve(students) });
    });
    return promise;
}
const mappings = [
    { sNo: 1, image: "studentsImage/adarsh.png" },
    { sNo: 2, image: "studentsImage/ayushi.png" },
    { sNo: 3, image: "studentsImage/chhavi.png" },
    { sNo: 4, image: "studentsImage/goutam.png" },
    { sNo: 5, image: "studentsImage/priya.png" },
    { sNo: 6, image: "studentsImage/shubham.png" },
    { sNo: 7, image: "studentsImage/sonali.png" },
    { sNo: 8, image: "studentsImage/srb.png" },
    { sNo: 9, image: "studentsImage/tanu.png" }
];
const AppExample42 = () => {
    const [students, setStudents] = React.useState([]);
    const [showStudent, setShowStudent] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [filteredStudents,setFilteredStudents]=React.useState([]);
    React.useEffect(() => {
        getStudents().then((students) => {
            setStudents(students);
            setFilteredStudents(students);
        });
    }, [])
    const applyFilter=(ev)=>{
        var filters=[];
        students.forEach((student)=>{
        if(student.name.toLowerCase().startsWith(ev.target.value.toLowerCase())){
            filters.push(student);
        }
        setFilteredStudents(filters);
        })
    }
    const classes = myStyles();
    return (
        <div className={classes.mainContainer}>
            <Paper className={classes.paper}>
                <Grid container spacing={8}>
                    <Grid item className={classes.grid}>
                        <Grid container direction="column">
                            <Grid item>
                                <OutlinedInput
                                    placeholder="Search Student"
                                    onChange={applyFilter}
                                    endAdornment={<InputAdornment position='end'
                                    ><SearchIcon></SearchIcon></InputAdornment>}
                                />
                            </Grid>
                            <Grid item>
                                <List>
                                    <ListItemText primary='List of Students'></ListItemText>
                                    {
                                        filteredStudents.map((student, idx) => {
                                            return (
                                                <ListItem button id={student.sNo} hover onClick={() => {
                                                    setShowStudent(student);
                                                    var img = mappings[student.sNo-1].image;
                                                    setImage(img);
                                                }}>
                                                    <ListItemText>{student.name}</ListItemText>
                                                </ListItem>
                                            )
                                        })
                                    }
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2">Dubey Company</Typography>
                        <Divider></Divider>
                        <Typography variant="h4">Details of Selected Student</Typography>
                        {showStudent != null && <React.Fragment>
                            <Card className={classes.card}>
                                <CardHeader
                                    title={showStudent.name}
                                    subheader={showStudent.college}
                                    avatar={
                                        <Avatar><PersonIcon /></Avatar>
                                    }
                                ></CardHeader>
                                <CardActions>
                                    <IconButton>
                                        <ChatIcon />
                                    </IconButton>
                                    <IconButton>
                                        <VideoCallIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={image}></CardMedia>
                            </Card>
                        </React.Fragment>
                        }
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default AppExample42;
