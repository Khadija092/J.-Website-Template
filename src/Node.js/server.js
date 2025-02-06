const express=require('express')
const app=express()
require('./Datebase/db')
app.listen(4444,()=>{
    console.log("Your server is running on port 4444")
})