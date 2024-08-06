const express = require ("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const myconnection = require("express-myconnection");
const mysql =require("mysql");
const clientesRoutes =require ("./routes/clientes")

app.set("port", process.env.PORT||4000);  //para Revisar si hay un puerto operativo o que utilice el puerto 4000
app.set ("view engine", "ejs");
app.set("views",path.join (__dirname,"views"));
app.use (morgan("dev"));
app.use (myconnection(mysql,{
    host: "Localhost",
    user: "root",
    password: "Jeronimo2024$",
    
    port: 3306,
    database: "db"   

},"single"));
app.use("/",clientesRoutes);
app.use(express.static(path.join(__dirname,"public")));
const { Console } = require("console");


app.listen(app.get ("port"),() =>{
    console.log ("server on port 4000");
});

