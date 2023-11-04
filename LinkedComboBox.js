const oracle=require('oracledb');
const express=require('express');
const app=express();

class State
{
constructor(id,name)
{
this.id=id;
this.name=name;
}
}
class City
{
constructor(code,name,id)
{
this.code=code;
this.name=name;
this.id=id;
}
}

app.get("/states",async function(request,response){
console.log("Request for states");
var connection=null;
connection=await oracle.getConnection({
"user":"hr",
"password":"hr",
"connectionString":"localhost:1521/xepdb1"
});
var states=[];
var resultSet=await connection.execute("select state_id, state_name from states");
resultSet.rows.forEach((row)=>{
console.log(row);
states.push(new State(row[0],row[1]));
});
response.send(states);
});
app.get("/cities",async function(request,response){
console.log("Request for cities");
var connection=null;
connection=await oracle.getConnection({
"user":"hr",
"password":"hr",
"connectionString":"localhost:1521/xepdb1"
});
var cities=[];
var resultSet=await connection.execute("select * from cities");
resultSet.rows.forEach((row)=>{
console.log(row);
cities.push(new City(row[0],row[1],row[2]));
});
response.send(cities);
});

app.listen(5050,function(err){
if(err) return console.log(err);
console.log("Server is ready to listen at 5050");
})