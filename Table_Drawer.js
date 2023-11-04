const express=require('express');
const oracle=require('oracledb');
const app=express();
class Department
{
constructor(departmentId,departmentName)
{
this.departmentId=departmentId;
this.departmentName=departmentName;
}
}
class Employee
{
constructor(employeeName,email,phoneNumber,salary,departmentId)
{
this.employeeName=employeeName;
this.email=email;
this.phoneNumber=phoneNumber;
this.salary=salary;
this.departmentId=departmentId;
}
}

app.get("/employees",async function(request,response){
console.log("Request for employeees");
var connection=null;
connection=await oracle.getConnection({
"user":"hr",
"password":"hr",
"connectionString":"localhost:1521/xepdb1"
});
var employees=[];
var resultSet=await connection.execute("select first_name, email, phone_number, salary,department_id from employees");
resultSet.rows.forEach((row)=>{
employees.push(new Employee(row[0],row[1],row[2],row[3],row[4]));
})
response.send(employees);
});

app.get("/departments",async function(request,response){
console.log("Request for departments");
var connection=null;
connection=await oracle.getConnection({
"user":"hr",
"password":"hr",
"connectionString":"localhost:1521/xepdb1"
});
var departments=[];
var resultSet=await connection.execute("select department_id, department_name from departments");
resultSet.rows.forEach((row)=>{
departments.push(new Department(row[0],row[1]));
})
response.send(departments);
});
app.listen(5050,(err)=>{
if(err)
{
return console.log(err);
}
console.log("Server is ready to listen at 5050");
}
);