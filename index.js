const express = require('express')
const port = 3010

const app=express()

app.get("/",(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log("Listening on port ", port)
})