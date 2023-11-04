const express=require('express');
const oracle=require('oracledb');
const app=express();
class Student
{
constructor(sNo,name,college)
{
this.sNo=sNo;
this.name=name;
this.college=college;
}
}
app.get("/students",async function(request,response){
console.log("Request for students");
var connection=null;
connection=await oracle.getConnection({
"user":"hr",
"password":"hr",
"connectionString":"localhost:1521/xepdb1"
});
var students=[];
var resultSet=await connection.execute("select * from card_student order by name");
resultSet.rows.forEach((row,i)=>{
students.push(new Student(i+1,row[1],row[2]));
});
response.send(students);
})
app.listen(5050,function(err){
if(err)
{
return console.log(err);
}
console.log('Server is listening at 5050');
})