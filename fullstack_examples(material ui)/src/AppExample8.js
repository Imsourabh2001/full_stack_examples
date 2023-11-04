import React from "react";
import { withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
const myStyles=()=>{
    return({
        listItem:{
            marginTop: "90px",
            padding : "15px"
        }
    })
}
const getDepartments=()=>{
    var promise=new Promise((resolve,reject)=>{
        fetch("/departments").then((response)=>{
            return response.json();
        }).then((departments)=>{ resolve(departments)});
    });
    return promise;
}
const AppExample8=()=>{
    const [activeState,setActiveState]=React.useState("view");
    const [departments,setDepartments]=React.useState([]);
    React.useEffect(()=>{
        var p=getDepartments();
        p.then((departments)=>{
            setDepartments(departments);
        })
    },[])
    const setActiveMode=(mode)=>{
        if(mode=="view") setActiveState("add");
        if(mode=="add") setActiveState("view");
    }
    return(
        <div>
           <ToolBarComponent mode={activeState} setActiveMode={setActiveMode}/>
           {activeState=="view" &&<ViewComponent departments={departments}/>}
           {activeState=="add"&& <AddComponent/>}
        </div>
    )
};
const ToolBarComponent=withStyles(myStyles)((props)=>{
    const toolbarButtonClicked=(ev)=>{
        props.setActiveMode(ev.currentTarget.getAttribute("target_action"))
    }
    return(
        <div>
            <AppBar>
                <Toolbar>
                   {props.mode=="view" &&<Button color="inherit" onClick={toolbarButtonClicked} target_action="view">
                        Add
                    </Button>}
                   {props.mode=="add" &&<Button color="inherit" onClick={toolbarButtonClicked} target_action="add">
                        Cancel
                    </Button>}
                </Toolbar>
            </AppBar>
        </div>
    )
    })
const ViewComponent=withStyles(myStyles)((props)=>{ 
    return(
        <div className={props.classes.listItem}>
            <h1>
                List of departments
            </h1>
            <ul>
                {
                    props.departments.map((department)=>{
                        return(
                            <li key={department.departmentId}>{department.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
})
const AddComponent=withStyles(myStyles)((props)=>{
    return(
        <div className={props.classes.listItem}>
            <h1>Add Component</h1>
        </div>
    )
});
export default withStyles(myStyles)(AppExample8);