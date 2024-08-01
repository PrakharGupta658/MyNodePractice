const http = require('http');
const fs  = require("fs");
const path = require('path');

const createServer = http.createServer((request , responce)=>{
    if(request.url === "/" && request.method === "GET"){
        responce.writeHead(200 , {"Content-Type" : "text/plain"}) ;
        responce.end("Welcome to about us page");
    }else
   
    if(request.url === "/about" && request.method === "GET"){
        const filepath = path.join(__dirname , "aboutUs.html")
        fs.readFile(filepath , (err , htmlFileData)=>{
           if(err){
            responce.writeHead(404 , {"Content-Type": "text/plain"});
            responce.end("Page not found");
           }else
            responce.writeHead(200 , {"Content-Type": "text/html"});
            responce.end(htmlFileData);
        })
    }
})

createServer.listen(3000, ()=>{
    console.log("Server Start on port 3000.....")
})