const oracle=require('oracledb');
const express=require('express');
const app=express();
class Region
{
constructor(id,name)
{
this.id=id;
this.name=name;
}
}
app.get("/regions",async function(request,response){
console.log("Request for regions");
var connection=null;
connection= await oracle.getConnection({
"user":"hr",
"password":"hr",
"connectionString":"localhost:1521/xepdb1"
});
var regions=[];
var resultSet=await connection.execute("select * from regions order by region_name");
resultSet.rows.forEach((row)=>{
regions.push(new Region(row[0],row[1]));
});
response.send(regions);
});

app.listen(5050,function(err){
if(err)
{
return console.log(err);
}
console.log("Server is ready to listen at 5050");
});