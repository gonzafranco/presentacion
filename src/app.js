const express = require('express')
const app = express()
const personas = require('../data/data.json')
const PORT = 3000


app.get("/hola",(req,res)=>{

    res.status(200).json(personas);
} )


app.listen(PORT, () => {console.log("puerto :" + PORT)});