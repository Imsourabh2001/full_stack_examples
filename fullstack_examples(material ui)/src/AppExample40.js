import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles, IconButton } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Collapse from "@material-ui/core/Collapse";
const myStyles = makeStyles((theme) => {
    return ({
        mainContainer: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        },
        paper: {
            paddingLeft: theme.spacing(4),
            paddingTop: theme.spacing(4),
            paddingRight: theme.spacing(4),
            paddingBottom: theme.spacing(4)
        }
    })
});
const departments = [
    {
        "name": "Physics", "students": [
            { "rollNumber": 101, "name": "Sourabh Dubey", "city": "Dewas" },
            { "rollNumber": 102, "name": "Adarsh Dubey", "city": "Ujjain" },
            { "rollNumber": 103, "name": "Sonali Dubey", "city": "Indore" },
            { "rollNumber": 104, "name": "Shubham Dubey", "city": "Bhopal" },
            { "rollNumber": 105, "name": "Ayushi Dubey", "city": "Indore" }
        ]
    },
    {
        "name": "Chemistry", "students": [
            { "rollNumber": 106, "name": "Chhavi Chouhan", "city": "Ujjain" },
            { "rollNumber": 107, "name": "Meenal Thakur", "city": "Bhopal" },
            { "rollNumber": 108, "name": "Sarthak Sharma", "city": "Manawar" },
            { "rollNumber": 109, "name": "Goutam Patidar", "city": "Sonkatch" }
        ]
    }
];
const AppExample40 = () => {
    const classes = myStyles();
    return (
        <div className={classes.mainContainer}>
            <Paper className={classes.paper}>
                <h1>Dubey Company</h1>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>S.no.</TableCell>
                                <TableCell>Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                departments.map((department, idx) => {
                                    return (
                                        <DeparmentRow idx={idx+1} department={department}/>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}
    const DeparmentRow = (props) => {
        const [openState, setOpenState] = React.useState(false);
return(
<React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton onClick={() => { setOpenState(!openState); }}>
                        {openState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{props.idx}</TableCell>
                <TableCell>{props.department.name}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={3}>
                    <Collapse in={openState}>
                        <Box margin={3}>
                            <Table>
                                <TableHead>
                                    <TableCell>S.no.</TableCell>
                                    <TableCell>Roll no.</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>City</TableCell>
                                </TableHead>
                                <TableBody>
                                    {
                                        props.department.students.map((student, idx) => {
                                            return (
                                                <TableRow key={student.rollNumber}>
                                                    <TableCell>{idx + 1}</TableCell>
                                                    <TableCell>{student.rollNumber}</TableCell>
                                                    <TableCell>{student.name}</TableCell>
                                                    <TableCell>{student.city}</TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
)
    }
export default AppExample40;