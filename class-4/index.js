
const http = require('http')
const port = 8080;
const hostname = '127.0.0.1'



 const myServer = http.createServer((req,res)=>{
  res.writeHead(202,{"Content-Type": "text/html"})
  res.write("<h>Hello</h>")
    res.end()
  });
  
  
   myServer.listen(port,hostname,()=>{
    console.log(`erver is running successfuly at http://${hostname}:${port}`);
   });

console.log("server");