import React from "react";
import { Card, CardHeader, CardActions, CardContent, IconButton, Paper, TextField, Button, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete"
import styles from "./ToDoList.module.css";
const ToDoList = () => {
    const [item, setItem] = React.useState();
    const [list, setList] = React.useState([]);
    const textChanged = (event) => {
        setItem(event.target.value);
    }
    const buttonClicked = () => {
        setList((oldValue) => {
            return [...oldValue, item]
        })
        setItem("");
    }
    const deleteItem = (ev) => {
       var elem=ev.currentTarget.getAttribute("id");
        var newList = [];
        list.map((e) => {
            if (e !== elem) newList.push(e);
        })
        setList(newList);
    }

    return (
            <div className={styles.Red}>
                <Grid container spacing={4}>
                    <Grid item justifyContent="center">

               <Card className={styles.Card}>
                <CardHeader
                    title='TO DO LIST'
                    subheader='Work Hard'
                />
                <CardContent >
                    <TextField
                        value={item}
                        onChange={textChanged}
                        placeholder="Add work"
                        color="blue"
                        helperText="Enter your daily task and complete"
                    /><Button variant="contained" color="primary" onClick={buttonClicked}>
                        <AddIcon />
                    </Button>
                </CardContent>
                <CardActions>
                    <List>
                        {
                            list.map((elem, index) => {
                                return (
                                    <ListItem>
                                        <DeleteIcon id={elem} onClick={deleteItem} /><ListItemText>{elem}</ListItemText>
                                    </ListItem>)
                            })
                        }
                    </List>
                </CardActions>
            </Card>
                    </Grid>
                </Grid>
            </div>
        )
}
export default ToDoList;