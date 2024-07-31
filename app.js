const http = require("http");
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(req,res){
   if(req.url === "/" && req.method ==="GET"){
    const filepath = path.join(__dirname , "index.html");

    fs.readFile(filepath,(err , data)=>{
        if(err){
            res.writeHead(500, {"content-Type" : "text/plain"});
            res.end("Internal error")
        }else{
            res.writeHead(200 , {"content-Type": "text/html"});
            res.end(data);
        }
    })
    
    // //1.write header
    // res.writeHead(200,{
    //     "Content-Type": "text/plain",
    // });
    // //2 end the responce
    // res.end("welcome to dominos");
   }
   else
   if(req.url === "/contact" && req.method ==="GET"){
    const branchDetail = {
        branch:"Bangaluru",
        contact:'773914103',
    };
    res.writeHead(200,{
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify(branchDetail));
   }else{
   res.writeHead(404,{
    "Content-Type":"text/plain",
   });
   res.end("url not found")
}
});

server.listen(5000);

//-------------------------express----------------------------

// const express = require("express");
// //initiate an app
// const app = express();
 
// //Creating Routes in expresss
// //syntax: app.<http-verb>(path,callback)

// app.get("/", function(req,res){
//     // res.writeHead(200,{
//     //             "Content-Type": "text/plain",
//     //         });
//     //         //2 end the responce
//     //         res.end("welcome to dominos");

//     // res.sendStatus(200);


//     res.send("welcome to send request")
//     // in send request status code by default is 200
// })

// app.get("/contact" , function(req, res){
//     // in res.send you need not to pass string everytiome 
//     // rather pass the requires data 
//     res.send({
//         name :"prakhar",
//         age:"21",
//     })

//     // to change the status code 
//     res.status(201).send({
//         name :"prakhar",
//         age:"21",
//     })
// })


// //start the server

// app.listen(5050,()=>{
//     console.log("application started on 5050");
// })