const http = require('http');
const fs = require('fs');
const hostName = '127.0.0.1';
const port = 8080;

const server = http.createServer((req,res)=>{
  const handleReadFile = (statesCode,fileLocation)=>{
    fs.readFile(fileLocation,(err,data)=>{
        res.writeHead(statesCode,{"Content-Type" : "text/html"})
        res.write(data);
        res.end();
    })
  }
  if (req.url=== "/") {
    handleReadFile(200,"./views/index.html")
        
    }else if (req.url=== "/abouts") {
        handleReadFile(200,"./views/abuots.html")
        
    } else if (req.url=== "/contract") {
        handleReadFile(200,"./views/contract.html")
    } else {
        handleReadFile(404,"./views/error.html")
    } 
})

server.listen(port,hostName,()=>{
    console.log(`server is running at http://${hostName}:${port}`);
})