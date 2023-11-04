import { Accordion, AccordionDetails, AccordionSummary, withStyles } from '@material-ui/core'
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const myStyles = (theme) => {
    return ({
        mainContainer: {
            flexGrow: 1
        }
    })
}
const getDepartments = () => {
    var promise = new Promise((resolve, reject) => {
        fetch("/departments").then((response) => {
            return response.json();
        }).then((departments) => { resolve(departments) });
    });
    return promise;
}
const getEmployees = () => {
        var pr= new Promise((resolve,reject)=>{
            fetch("/employees").then((response)=>{
                return response.json();
            }).then((employees)=>{ resolve(employees)});
        });
         
        return pr;
    }
    const AppExample34 = (props) => {
        const [departments,setDepartments]=React.useState([]);
        const [employees,setEmployees]=React.useState([]);
        const onAccordionStateChanged = (idx, state) => {
       //alert(idx + "," + state);
    }
    React.useEffect(() => {
        if(employees.length===0){ 
        var pm = getEmployees();
            pm.then((employees)=>{
                setEmployees(employees);
              
            })
        }
        if(departments.length===0)
        {
            var p = getDepartments();
            p.then((departments) => {
                setDepartments(departments);
        }
        )
    }
    }, []);

    return (
        <div>
            {
                departments.map((department) => {
                    return (
                        <Accordion key={department.departmentId} onChange={ (ev,ex)=>{ onAccordionStateChanged(department.departmentId,ex) } } >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}><b>{department.departmentName}</b></AccordionSummary>
                            <AccordionDetails>
                                <ListComponent id={department.departmentId} employees={employees}/>
                          </AccordionDetails>
                          
                        </Accordion>)
                })
            }
        </div>
    )
}
const ListComponent=(props)=>{
    var list=[];
    props.employees.forEach((employee)=>{
        if(employee.departmentId===props.id) 
        {
            list.push(employee.employeeName);
        }
    })
    return(
            <div>
             {
                list.map((name)=>{
                    return(<div>{name}</div>);
                })
             }
            </div>
        
    )
}
export default withStyles(myStyles)(AppExample34);