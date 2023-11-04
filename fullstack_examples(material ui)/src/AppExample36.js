import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
const myStyles=makeStyles((theme)=>{
    return({
        mainContainer:{
            flexGrow:1
        },
        content:{
            padding:"10px",
            textAlign: "center"
        },
        appBarSpacer: theme.mixins.toolbar,
        appBar:{
            zIndex: theme.zIndex.drawer+1000
        }
    })
});
const getDepartments=()=>{
    var promise=new Promise((resolve)=>{
        fetch("/departments").then((response)=>{return response.json()}).then((departments)=>{resolve(departments)});
    });
    return promise;
}
const getEmployees=()=>{
    var promise=new Promise((resolve)=>{
        fetch("/employees").then((response)=>{return response.json()}).then((employees)=>{resolve(employees)});
    });
    return promise;
}

const AppExample35=()=>{
    const [departments,setDepartments]=React.useState([]);
    const [employees,setEmployees]=React.useState([]);
    const [showProgress,setShowProgress]=React.useState(true);
    const [showWhat,setShowWhat]=React.useState([]);
    const [showDrawer,setShowDrawer]=React.useState(false);
React.useEffect(()=>{
    if(departments.length==0){
    getDepartments().then((departments)=>{
        setDepartments(departments);
       setShowProgress(false);
    });
}
if(employees.length==0){
    getEmployees().then((employees)=>{
        setEmployees(employees);
    })
}},[]);
const openDrawer=()=>{
    setShowDrawer(true);
};
const closeDrawer=()=>{
    setShowDrawer(false);
};
const departmentClicked=(ev)=>{
    setShowDrawer(false);
   var item=[];
   var id=ev.currentTarget.getAttribute("id");
    employees.forEach((employee)=>{
        if(id==employee.departmentId)
        {   
             item.push(employee); 
        }
    })
    setShowWhat(item);   
}
const stylesClasses=myStyles();
return(
    <div className={stylesClasses.mainContainer}>
  <AppBar className={stylesClasses.appBar}>
            <Toolbar >
                <IconButton color='inherit' onClick={openDrawer}>
                    <MenuIcon/>
                </IconButton>
            <Typography>Dubey Company</Typography>
            </Toolbar>
        </AppBar>    
        <Drawer open={showDrawer} onClose={closeDrawer}>
            <Toolbar/>
            <List>
                {
                    departments.map((department)=>{
                        return(
                <ListItem button id={department.departmentId} onClick={departmentClicked}>
                    <ListItemText>{department.departmentName}</ListItemText>
                </ListItem>
                        )
                    })
                }
                
                </List>
                {showProgress &&  <CircularProgress/>}
        </Drawer>
     <div className={stylesClasses.appBarSpacer}></div>
        <div className={stylesClasses.content}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>S.NO.</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>EMAIL</TableCell>
                        <TableCell>PHONE NO.</TableCell>
                        <TableCell>SALARY</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        showWhat.map((employee,idx)=>{
                            return(
                                <TableRow>
                                    <TableCell align='right'>{idx+1}</TableCell>
                                    <TableCell>{employee.employeeName}</TableCell>
                                    <TableCell>{employee.email}</TableCell>
                                    <TableCell>{employee.phoneNumber}</TableCell>
                                    <TableCell>{employee.salary}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
          
        </div>
    </div>
)
}
export default AppExample35;