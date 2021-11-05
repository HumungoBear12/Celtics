const express = require('express')
const app = express()
const path = require('path')
app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname+'/Home.html'))
})
app.get('/index.css',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname+'/Styles','index.css'))
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000....')
})