import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const myStyles = (theme) => {
    return ({
        mainContainer: {
            flewGrow: 1
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
            color: "#2929aa",
            fontWeight: "bold",
            padding: "15px",
            marginLeft: "100px"
        },
        appBar:{
            zIndex: theme.zIndex.drawer+10000
        }
    })
}

const AppExample32 = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={HomeComponent}></Route>
                <Route exact path="/chapter1" Component={ChapterOneComponent}></Route>
                <Route exact path="/chapter2" Component={ChapterTwoComponent}></Route>
                <Route exact path="/chapter3" Component={ChapterThreeComponent}></Route>
            </Routes>
        </BrowserRouter>
    )
}
const HomeComponent = withStyles(myStyles)((props) => {
    return (
        <div>
            <AppBarComponent heading="Home"/>
            <div className={props.classes.appBarSpacer}></div>
            <div className={props.classes.content}>Wel-Come to Home page
                <DrawerComponent heading="Home" />
            </div>
        </div>
    )
})
const DrawerComponent = withStyles()((props) => {
    const [showDrawer, setShowDrawer] = React.useState(false);
   const onDrawerClose=()=> {
        setShowDrawer(false);
}
const onDrawerOpen=()=>{
    setShowDrawer(true);
}
return (
    <div>
        <Grid container justifyContent="space-between">
            <Grid item>
                <Drawer open={showDrawer} varient="permanent" onClose={onDrawerClose}>
                    <Toolbar/>
                    <List>
                    <ListItem button component={Link} to='/'>
                          {props.heading!="Home" && <ListItemText>Home</ListItemText>}
                        </ListItem>
                        <ListItem button component={Link} to='/chapter1'>
                          {props.heading!="Chapter 1" && <ListItemText>Chapter 1</ListItemText>}
                        </ListItem>
                        <ListItem button component={Link} to='/chapter2'>
                        {props.heading!="Chapter 2" && <ListItemText>Chapter 2</ListItemText>}
                        </ListItem>
                        <ListItem button component={Link} to='/chapter3'>
                        {props.heading!="Chapter 3" && <ListItemText>Chapter 3</ListItemText>}
                        </ListItem>
                    </List>
                </Drawer>
            </Grid>
            <Grid item>
              { showDrawer==false &&<Button onClick={onDrawerOpen}>Open Drawer</Button>}
                {showDrawer==true &&<Button onClick={onDrawerClose}>Close Drawer</Button>}
            </Grid>
        </Grid>
    </div>
)
})
const AppBarComponent = withStyles(myStyles)((props) => {
    return (
        <div>
            <AppBar className={props.classes.appBar}>
                <Toolbar>
                    <Typography>Dubey Company - {props.heading}</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
})
const ChapterOneComponent = withStyles(myStyles)((props) => {
  const getChapterOne=()=>{
    var promise=new Promise();
    return promise;
  }
    
   React.useEffect(()=>{
    getChapterOne().then(()=>{})
   },[]);
    return (
        <div>
            <AppBarComponent heading='Chapter 1'/>
            <DrawerComponent heading='Chapter 1'/>
            
        </div>
    )
})
const ChapterTwoComponent = withStyles(myStyles)((props) => {
    return (
        <div>
            <AppBarComponent heading='Chapter 2'/>
            <DrawerComponent heading='Chapter 2'/>
        </div>
    )
})
const ChapterThreeComponent = withStyles(myStyles)((props) => {
    return (
        <div>
            <AppBarComponent heading='Chapter 3'/>
            <DrawerComponent heading='Chapter 3'/>
        </div>
    )
})
export default AppExample32;