import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';

var students=[
    {"rollNumber":"101","name":"Sourabh"},
    {"rollNumber":"102","name":"Ayushi"},
    {"rollNumber":"103","name":"Shubham"},
    {"rollNumber":"104","name":"Sonali"},
    {"rollNumber":"105","name":"Priya"},
    {"rollNumber":"106","name":"Adarsh"},
    {"rollNumber":"107","name":"Anay"},
    {"rollNumber":"108","name":"Abhi"},
    {"rollNumber":"109","name":"Goutam"},
    {"rollNumber":"110","name":"Chhavi"},
    {"rollNumber":"111","name":"Arundhati"},
    {"rollNumber":"112","name":"Meenal"},
    {"rollNumber":"113","name":"Sarthak"}
    
]
const myStyles=makeStyles((theme)=>{
    return({
        mainContainer:{
            color:"blue",
            paddingLeft: theme.spacing(5)
        }
    })
});
const AppExample38=()=>{
    const styleClasses=myStyles();
    const [pageNumber,setPageNumber]=React.useState(1);
    const [pageSize,setPageSize]=React.useState(5);
    const [checkAll,setCheckAll]=React.useState(false);
    const [selectedStudents,setSelectedStudents]=React.useState([]);
    const onPageChanged=(ev,pg)=>{
        setPageNumber(pg+1);
    }
    const onSizeChanged=(ev)=>{
        setPageSize(ev.target.value);
        setPageNumber(1);
    }
    const isStudentSelected=(rollNumber)=>{
        return selectedStudents.indexOf(rollNumber)!=-1;
    }
    var selections=[];
    const checkAllBoxClicked=()=>{
        if(checkAll==true){
            selections=[];
            setCheckAll(false);
        }
        else{
            selections=[];
            students.forEach((student)=>{
                selections.push(student.rollNumber);
            })
            setCheckAll(true);
        }
        setSelectedStudents(selections)
    }
    const onTableRowClicked=(rollNumber)=>{
        var index=selectedStudents.indexOf(rollNumber);
        if(index==-1) // not selected hence now select
        {
            selections=selections.concat(selectedStudents,rollNumber);
        }
        else          // already selected hence now deselect
        {
            if(index==0)
            {
                selections=selections.concat(selectedStudents.slice(1));
            }
            else if(index==selectedStudents.length-1)
            {
                selections=selections.concat(selectedStudents.slice(0,selectedStudents.length-1))
            }
            else{
                selections=selections.concat(selectedStudents.slice(0,index),selectedStudents.slice(index+1))
            }
        }
        setSelectedStudents(selections);
        if(students.length==selectedStudents.length+1)
        {
            setCheckAll(true);
        }
        else
        {
            setCheckAll(false);
        }
    }
        return(
        <div className={styleClasses.mainContainer}>
            <Paper>
            <h1>Dubey Machines</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell onClick={checkAllBoxClicked}><Checkbox checked={checkAll}/></TableCell>
                            <TableCell>S.no.</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Roll Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        students.slice((pageNumber-1)*pageSize,((pageNumber-1)*pageSize)+pageSize).map((student,idx)=>{
                           const selectionState=isStudentSelected(student.rollNumber);
                            return(
                           <TableRow key={student.rollNumber} hover onClick={()=>{onTableRowClicked(student.rollNumber)}}>
                                <TableCell><Checkbox checked={selectionState}/></TableCell>
                                <TableCell>{(pageNumber-1)*pageSize+(idx+1)}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.rollNumber}</TableCell>
                            </TableRow>
                           )
                        })
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
            content='div'
            rowsPerPageOptions={[5,10,15,20,25]}
            count={students.length}
            rowsPerPage={pageSize}
            page={pageNumber-1}
            onRowsPerPageChange={onSizeChanged}
            onPageChange={onPageChanged}
            />
            </Paper>
        </div>
    )
}
export default AppExample38;