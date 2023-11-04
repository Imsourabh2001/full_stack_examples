import { Button } from "@material-ui/core";
import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const AppExample44=()=>{
    return(<div>
        <Button variant="contained">Contained Button</Button><br/><br/>
        <Button variant="outlined">Outlined Button</Button><br/><br/>
        <Button variant="text">Text Button</Button><br/><br/>

        <Button color="primary" variant="contained">Contained Button</Button><br/><br/>
        <Button color="secondary" variant="outlined">Outlined Button</Button><br/><br/>
        <Button color="default" variant="text">Text Button</Button><br/><br/>

        <Fab>
            <AddIcon/>
        </Fab><br/><br/>

        <Fab color="primary">
            <AddIcon/>
        </Fab><br/><br/>
        <Fab color="secondary">
            <AddIcon/>
        </Fab><br/><br/>
        <Fab color="inherit" size="large">
            Add More<AddIcon/>
        </Fab><br/><br/>
        <Fab color="default" variant="extended">
            Add More<AddIcon/>
        </Fab><br/><br/>

    </div>)
}
export default AppExample44;