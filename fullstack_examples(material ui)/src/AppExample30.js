import { AppBar, withStyles, Toolbar, Typography, Grid, Button, Drawer, List, ListItem, ListItemText,  ListItemIcon, Divider } from "@material-ui/core";
import React from "react";
import AddBox from '@material-ui/icons/AddBox';

const myStyles=(theme)=>{
    return({
        mainContainer:{
            flexGrow:1
        },
        appBarSpacer: theme.mixins.toolbar,
        content:{
            color: "#2929aa"
        },
        appBar:{
            zIndex: 10000
        }
    })
}
const AppExample30=(props)=>{
    const [showDrawer,setShowDrawer]=React.useState(false);
    const closeDrawer=()=>{
        setShowDrawer(false);
    }
    const openDrawer=()=>{
        setShowDrawer(true);
    }
    return(
        <div className={props.classes.mainContainer}>
            <AppBar className={props.classes.appBar}>
                <Toolbar>
                    <Typography>Dubey Machines</Typography>
                </Toolbar>
            </AppBar>
            <div className={props.classes.appBarSpacer}/>
            <div className={props.classes.content}>
               <Grid container justifyContent="space-between">
                <Grid item>
                <Drawer open={showDrawer} variant="persistent">
                    <Toolbar></Toolbar>
                    <List>
                        <ListItem>
                            <ListItemText>Option 1</ListItemText>
                        </ListItem>
                        <Divider></Divider>
                         <ListItem>
                            <ListItemIcon><AddBox/></ListItemIcon>
                            <ListItemText>Option 2</ListItemText>
                        </ListItem>
                        <Divider></Divider>
                        <ListItem>
                            <ListItemText>Option 3</ListItemText>
                        </ListItem>
                        <Divider></Divider>
                        <ListItem>
                            <ListItemText>Option 4</ListItemText>
                        </ListItem>
                        <Divider></Divider>
                        </List>
                </Drawer>

                </Grid>
                <Grid item>
                { showDrawer==true && <Button onClick={closeDrawer}>Close Drawer</Button>}
                { showDrawer==false && <Button onClick={openDrawer}>Open Drawer</Button>}
                </Grid>
               </Grid>
            </div>
        </div>
    )
}
export default withStyles(myStyles)(AppExample30);