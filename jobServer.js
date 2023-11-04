const oracle=require('oracledb');
const express=require('express');
const app=express();

class Job
{
constructor(id,title,minSalary,maxSalary)
{
this.id=id;
this.title=title;
this.minSalary=minSalary;
this.maxSalary=maxSalary;
}
}

app.get("/jobs",async function(request,response){
var connection=null;
connection=await oracle.getConnection({
"user":"hr",
"password":"hr",
"connectionString":"localhost:1521/xepdb1"
});
var jobs=[];
var resultSet=await connection.execute("select * from jobs");
resultSet.rows.forEach((row)=>{
jobs.push(new Job(row[0],row[1],row[2],row[3]));
});
response.send(jobs);
});

app.listen(5050,function(err){
if(err)
{
return console.log("Some error");
}
console.log("Server is listening at port 5050");
});