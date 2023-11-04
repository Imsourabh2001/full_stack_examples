const express = require('express');
const oracle=require('oracledb');
const bodyParser=require('body-parser');
const app=express();
var urlEncodedBodyParser=bodyParser.urlencoded({extended:false});
app.use(express.json());
app.post("/chips",async function(request,response){
    console.log("Request for chips")
    console.log(request.body);

    var connection=null;
    connection= await oracle.getConnection({
        "user":"hr",
        "password":"hr",
        "connectionString":"localhost:1521/xepdb1"
    })
   var name=null;
for(var i=0;i<request.body.length;i++){
 name=request.body[i].name;
   var resultSet= await connection.execute(`insert into chipInput values ('${name}')`);
  }
 await connection.commit();
   await connection.close();
    response.send({"success":true});
})

app.listen(5050,function(err){
    if(err)
    {
        return console.log(err);
    }
    console.log("Server is ready to listen at 5050")
})