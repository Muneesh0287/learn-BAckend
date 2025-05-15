// const http =require("http")

// const data =require("./data")
// http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/html"})
//     res.write(JSON.stringify(data))
//     res.end()
// }).listen(5000)


// const fs = require('fs');
// const path =require('path')
// const dirPath = path.join(__dirname,'file')
// // fs.writeFileSync('apple.txt','tis is apple file')
// console.log("dirpath",dirPath);


// const express = require("express");
// const app =express()
// app.get("/",(req,res)=>{
//     res.send("hello this in Home Page ");
// })
// app.get("/about",(req,res)=>{
//     res.send("hello this is About Page");
// })
// app.listen(5000);



// const express =require('express')
// const app = express()
// const path =require('path')
// const publicPath =path.join(__dirname,'public')
// app.use(express.static(publicPath))
// app.listen(5000)


// const express =require('express')
// const app = express()

// const reqFilter=(req,res,next)=>{
//     console.log("hello this is middleware");
//     next()
// }
// app.use(reqFilter)

// app.get('/',(req,res)=>{
//     res.send("Wellcome to use Page ")
// })

// app.get('/user',(req,res)=>{
//     res.send("Wellcome to use Page ")
// })
// app.listen(5000)



// dbconnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })

// const dbConnect =require("./mongodb")


// const main =async()=>{
// let data = await  dbConnect()
// data = await data.find().toArray()
// console.log(data);
// }
// main()
const data = require('./api')
console.log(data);

