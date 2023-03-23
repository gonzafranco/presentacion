const express = require('express')
const app = express()
const PORT = 3000


app.get("/hola",(req,res)=>{

    res.status(200).json({"Hola":"Mundo"});
} )


app.listen(PORT, () => {console.log("puerto :" + PORT)});