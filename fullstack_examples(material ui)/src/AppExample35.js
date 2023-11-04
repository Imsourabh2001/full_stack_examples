import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';

const myStyles=makeStyles((theme)=>{
    return({
        mainContainer:{
            flexGrow:1
        },
        content:{
            padding:"10px",
            textAlign: "center"
        },
        mainHeading:{
            fontWeight: "bold",
            fontSize: "28pt",
            color: "#2222aa"
        }
    })
});
const getStudents=()=>{
    var promise=new Promise((resolve)=>{
        var studnets=[
            {"name":"Sourabh Dubey","company":"ABCD","package":"10LPA"},
            {"name":"Shubham Dubey","company":"EFGH","package":"12LPA"},
            {"name":"Ayushi Dubey","company":"PQR","package":"13LPA"},
            {"name":"Sonali Dubey","company":"XYZ","package":"14LPA"}
        ];
        setTimeout(()=>{
            resolve(studnets);
        },5000)
    });
    return promise;
}

const AppExample35=()=>{
    const [students,setStudents]=React.useState([]);
    const [showProgress,setShowProgress]=React.useState(true);
React.useEffect(()=>{
    getStudents().then((students)=>{
        setStudents(students);
       setShowProgress(false);
    });
},[]);
const stylesClasses=myStyles();
return(
    <div className={stylesClasses.mainContainer}>
        <div className={stylesClasses.mainHeading}>Dubey Company</div>
        <div className={stylesClasses.content}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>S.NO.</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>COMPANY</TableCell>
                        <TableCell>PACKAGE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    students.map((student,idx)=>{
                        return(
                            <TableRow>
                                <TableCell align='right'>{idx+1}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.company}</TableCell>
                                <TableCell>{student.package}</TableCell>
                            </TableRow>
                        )
                    })
                }
                </TableBody>
            </Table>
          {showProgress &&  <CircularProgress/>}
        </div>
    </div>
)
}
export default AppExample35;