const express=require('express');
const oracle=require('oracledb');
const app=express();
class Invoice
{
constructor(invoiceNumber,customerName,invoiceDate,subTotal,tax,total)
{
this.invoiceNumber=invoiceNumber;
this.customerName=customerName;
this.invoiceDate=invoiceDate;
this.subTotal=subTotal;
this.tax=tax;
this.tax=tax;
}
}
class InvoiceItem
{
constructor(invoiceNumber,sNo,itemName,Quantity,Rate,Amount)
{
this.invoiceNumber=invoiceNumber;
this.sNo=sNo;
this.itemName=itemName;
this.Quantity=Quantity;
this.Rate=Rate;
this.Amount=Amount;
}
}

app.get("/invoices",async function(request,response){
console.log("Request for invoices");
var connection=null;
connection=await oracle.getConnection({
"user":"hr",
"password":"hr",
"connectionString":"localhost:1521/xepdb1"
});
var invoices=[];
var name,date;
var resultSet=await connection.execute("select * from invoice");
resultSet.rows.forEach((row)=>{
name=row[1].trim();
invoices.push(new Invoice(row[0],name,row[2],row[3],row[4],row[5]));
});
response.send(invoices);
});

app.get("/invoicesItem",async function(request,response){
console.log("Request for invoicesItem");
var connection=null;
connection=await oracle.getConnection({
"user":"hr",
"password":"hr",
"connectionString":"localhost:1521/xepdb1"
});
var invoicesItem=[];
var item;
var resultSet=await connection.execute("select * from invoice_item");
resultSet.rows.forEach((row)=>{
item=row[2].trim();
invoicesItem.push(new InvoiceItem(row[0],row[1],item,row[3],row[4],row[5]));
});
response.send(invoicesItem);
});

app.listen(5050,(err)=>{
if(err)
{
return console.log(err);
}
console.log("Ready to listen at port 5050");
});