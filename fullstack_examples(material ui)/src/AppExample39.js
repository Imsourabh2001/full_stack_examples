import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormGroup, FormLabel, Grid, InputLabel, MenuItem, Paper, Select, Table, TableFooter, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const myStyles=makeStyles((theme)=>{
return({
    mainContainer:{
        padding: theme.spacing(3)
    },
    dropDownContainer:{
        width: "130px"
    },
    dataContainer:{
        height:"400px",
        padding:theme.spacing(5)
    }
})
});
const getInvoices=()=>{
    var promise=new Promise((resolve,reject)=>{
        fetch("/invoices").then((response)=>{
            return response.json();
        }).then((invoices)=>{
            resolve(invoices)
        });
    });
    return promise;
}
const getInvoicesItem=()=>{
    var promise=new Promise((resolve,reject)=>{
        fetch("/invoicesItem").then((response)=>{
            return response.json();
        }).then((invoicesItem)=>{
            resolve(invoicesItem)
        });
    });
    return promise;
}
const AppExample39=()=>{
    const styleClasses=myStyles();
    const [invoices,setInvoices]=React.useState([]);
    const [invoicesItem,setInvoicesItem]=React.useState([]);
    const [invoiceNumber,setInvoiceNumber]=React.useState(null);
    const [customerName,setCustomerName]=React.useState(null);
    const [invoiceDate,setInvoiceDate]=React.useState(null);
    const [filteredItem,setFilteredItem]=React.useState([]);
    const [subTotal,setSubTotal]=React.useState(null);
    const [tax,setTax]=React.useState(null);
    const [total,setTotal]=React.useState(null);
    const [showFooter,setShowFooter]=React.useState(false);
React.useState(()=>{
    if(invoices.length==0){
    getInvoices().then((invoices)=>{
        setInvoices(invoices)
    });
}
    if(invoicesItem.length==0){
        getInvoicesItem().then((invoicesItem)=>{
            setInvoicesItem(invoicesItem);
        }
        );
    }
},[])
const selectClicked=(ev)=>{
    invoices.forEach((invoice)=>{
        if(invoice.invoiceNumber===ev.target.value)
        {
            setInvoiceNumber(invoice.invoiceNumber);
            setCustomerName(invoice.customerName);
            setInvoiceDate(invoice.invoiceDate);
            setSubTotal(invoice.subTotal);
            setTax(invoice.tax);
        }
    })
    var item=[];
    var amount=0;
    invoicesItem.forEach((invoiceItem)=>{
        if(invoiceItem.invoiceNumber===ev.target.value){ 
            item.push(invoiceItem);
            amount=amount+((invoiceItem.Amount)*(invoiceItem.Quantity));
        }
    });
    setShowFooter(true);
    setFilteredItem(item);
    setTotal(amount);
}   
    return(
        <div className={styleClasses.mainContainer}>
            <InputLabel>Select Invoice</InputLabel>
            <Select
            onChange={selectClicked}
            >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            </Select>
            <Grid container justifyContent="center" spacing="5">
                <Grid item >
                <Paper>
                    <Typography>Dubey Machines</Typography>
                </Paper>
                </Grid>
                <Grid item>
                <Paper><Typography>Logo</Typography></Paper>
                </Grid>
                <Grid container spacing={5}>
                    <Grid item direction="column">
                    <Paper>
                      Invoice Number : {invoiceNumber}
                    </Paper>
                    <Paper>
                        Customer Name : {customerName}
                    </Paper>
                    </Grid>
                    <Grid item >
                    Invoice Date : {invoiceDate}
                    </Grid>
                </Grid>
                <TableContainer className={styleClasses.dataContainer}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>S.no</TableCell>
                                <TableCell>Item Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Rate</TableCell>
                                <TableCell>Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            filteredItem.map((invoice,idx)=>{
                                return(
                                    <TableRow>
                                        <TableCell>{invoice.sNo}</TableCell>
                                        <TableCell>{invoice.itemName}</TableCell>
                                        <TableCell>{invoice.Quantity}</TableCell>
                                        <TableCell>{invoice.Rate}</TableCell>
                                        <TableCell>{invoice.Amount}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                        </TableBody>
                        {showFooter&&<TableFooter>
                            <TableRow>
                                <TableCell align="right"colSpan={5}>Sub Total : {subTotal}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right" colSpan={5}>Tax : {tax}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right" colSpan={5}>Total : {total}</TableCell>
                            </TableRow>

                        </TableFooter>}
                    </Table>                    
                </TableContainer>
            </Grid>
        </div>
    )
}
export default AppExample39;