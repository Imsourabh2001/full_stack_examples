import React from "react";
import { withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const myStyles=()=>{
    return({
        mainContainer:{
            flexGrow: 1,
        },
        content:{
            color: "blue"
        }
    })
}
const AppExample26=({classes})=>{
    const appBarMenuIconClickHandler=(ev)=>{
        setAnchorForMenu(ev.currentTarget);
    }
    const appBarMenuCloseHandler=()=>{
        setAnchorForMenu(null);
    }
    const [anchorForMenu,setAnchorForMenu]=React.useState(null);
    return(
        <div className={classes.mainContainer}>
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" onClick={appBarMenuIconClickHandler}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Menu anchorEl={anchorForMenu} open={Boolean(anchorForMenu)} onClose={appBarMenuCloseHandler}>
                        <MenuItem>Option 1</MenuItem>
                        <MenuItem>Option 2</MenuItem>
                        <MenuItem>Option 3</MenuItem>
                        <MenuItem>Option 4</MenuItem>
                        <MenuItem>Option 5</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            Cool feature
        </div>
    )
}

export default withStyles(myStyles)(AppExample26);