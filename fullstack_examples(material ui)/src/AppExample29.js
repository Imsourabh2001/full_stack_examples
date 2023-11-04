import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const myStyles=(theme)=>{
    return({
        mainContainer:{
            flexGrow: 1
        },
        appBarSpacer: theme.mixins.toolbar
        ,
        welcome:{
            fontWeight:"bold",
            fontSize:"24pt",
            color:"#2929aa"
        }
    })
}
const AppExample29=withStyles(myStyles)(({classes})=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={HomeComponent}></Route>
            <Route exact path='/courses' Component={CoursesComponent}></Route>
            <Route exact path='/contactUs' Component={ContactUsComponent}></Route>
        </Routes>
        </BrowserRouter>
    )
})
const AppBarComponent=withStyles(myStyles)((props)=>{
    const [menuAnchor,setMenuAnchor]=React.useState(null);
    const showMenu=(ev)=>{
        setMenuAnchor(ev.currentTarget);
    }
    const hideMenu=()=>{
        setMenuAnchor(null);
    }
    return(
        <AppBar>
        <Toolbar>
            <IconButton color="inherit" onClick={showMenu}>
                <MenuIcon></MenuIcon>
            </IconButton>
            <Typography>Dubey Machines - {props.heading}</Typography>
            <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={hideMenu} keepMounted>
                {props.heading!='Home'&& <MenuItem component={Link} to='/'>Home</MenuItem>}
                {props.heading!='Courses'&& <MenuItem component={Link} to='/courses'>Courses</MenuItem>}
                {props.heading!='Contact Us'&&<MenuItem component={Link} to='/contactUs'>Contact Us</MenuItem>}
            </Menu>
        </Toolbar>
        </AppBar>
    )
});

const HomeComponent=withStyles(myStyles)(({classes})=>{
    return(
        <div className={classes.mainContainer}>
        <AppBarComponent heading="Home"/>
        <div className={classes.appBarSpacer}/>
        <Grid container justify="center">
        <Grid item xs={1}><div className={classes.welcome}>Welcome</div></Grid>
        </Grid>       
        </div>
    )
})
const CoursesComponent=withStyles(myStyles)(({classes})=>{
    return(
        <div>
        <AppBarComponent heading="Courses"/>
        <h3>Courses</h3>
        </div>
        )
})
const ContactUsComponent=()=>{
    return(
        <div>
      <AppBarComponent heading="Contact Us"/>
      <h3>Contact Us</h3>
        </div>
        )
}
export default AppExample29;