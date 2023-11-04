import { withStyles } from "@material-ui/core";
import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubHeader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
const myStyles=(theme)=>{
    return({
        mainContainer:{
            flexGrow:1
        },
        appBarSpacer: theme.mixins.toolbar,
        content:{
            color: "#2929aa",
            padding: "10px",
            alignment: "center"
        },
        appBar:{
            zIndex: theme.zIndex.drawer+1000
        }
    })
}
const AppExample31=(props)=>{
    const [tabIndex,setTabIndex]=React.useState(0);
    const [routeComponent,setRouteComponent]=React.useState(HomeComponent);
    const [showDrawer,setShowDrawer]=React.useState(false);
    const onTabChange=(ev,val)=>{
        setShowDrawer(false);
        if(val==tabIndex)return;
        setTabIndex(val);
        if(val==0) setRouteComponent(HomeComponent);
        else if(val==1) setRouteComponent(CoursesComponent);
        else if(val==2) setRouteComponent(ContactComponent);
        else if(val==3) setRouteComponent(OfferComponent);
    }
    const openDrawer=()=>{
        setShowDrawer(true);
    }
        return(
            <BrowserRouter>
            <div className={props.classes.mainContainer}>
                <AppBar className={props.classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={openDrawer}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <Tabs value={tabIndex} onChange={onTabChange}>
                            <Tab label="Home"></Tab>
                            <Tab label="Courses"></Tab>
                            <Tab label="Contact Us"></Tab>
                            <Tab label="Offers"></Tab>
                        </Tabs>
                    </Toolbar>
                </AppBar>
                <Drawer open={showDrawer} variant="variant" onClose={()=>{setShowDrawer(!showDrawer)}}>
                    <Toolbar></Toolbar>
                <List>
                    <ListItem onClick={()=>{onTabChange(null,0); setShowDrawer(!showDrawer)}}>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{onTabChange(null,1); setShowDrawer(!showDrawer)}}>
                        <ListItemText>Courses</ListItemText>
                    </ListItem>
                    <ListItem onClick={()=>{onTabChange(null,2); setShowDrawer(!showDrawer)}}>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItem>
                    <ListSubHeader>Heading Sub</ListSubHeader>
                    <ListItem onClick={()=>{onTabChange(null,3); setShowDrawer(!showDrawer)}}>
                        <ListItemText>Offers</ListItemText>
                    </ListItem>
                </List>
                </Drawer>
                <div className={props.classes.appBarSpacer}></div>
                <div className={props.classes.content}>
                    <Routes>
                    <Route exact path='/' Component={routeComponent}></Route>
                    </Routes>
                </div>
            </div>
            </BrowserRouter>
        )
}
const HomeComponent=withStyles(myStyles)(({classes})=>{
    return(
        <div>
            <Grid container justifyContent="center">
                <Grid item xs={1}>
            <h1>Home</h1>
            <h3>Welcome</h3>
            </Grid>
            </Grid>
        </div>
    )
});
const CoursesComponent=withStyles(myStyles)(({classes})=>{
    return(
        <div>
            <h1>Courses</h1>
            <h3>Welcome</h3>
        </div>
    )
});
const ContactComponent=withStyles(myStyles)(({classes})=>{
    return(
        <div>
            <h1>Contact</h1>
            <h3>Welcome</h3>
        </div>
    )
});
const OfferComponent=withStyles(myStyles)(({classes})=>{
    return(
        <div>
            <h1>Offers</h1>
            <h3>Welcome</h3>
        </div>
    )
});
export default withStyles(myStyles)(AppExample31);