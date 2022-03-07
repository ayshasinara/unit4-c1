const express=require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app=express()
app.use(logger)

app.get("/books",(req, res)=>{
 res.send({ route: "/books"})
})

   app.get("/libraries",checkPermission,(req, res)=>{
    res.send( { route: "/libraries", permission: req.permission})
   })
   app.get("/authors",checkPermission,(req, res)=>{
    res.send( { route: "/authors", permission: req.permission})
   })
   function logger(req, res, next){
       console.log("req path",req.path)
       next()
   }
 

function checkPermission(req, res, next){
    req.permission="true"
    next()
 
   }

app.listen(5000,()=>{
    console.log("listening to port 5000")
})