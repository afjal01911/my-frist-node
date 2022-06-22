const http = require('http')
const port = 8080;
const hostname = '127.0.0.1'

// http.createServer((req,res)=>{
//     res.end("Hello I am Frist server")
// }).listen(8080)

// const myServer = http.createServer((req,res)=>{
//     res.end("Hello I am Frist server")
// });

// myServer.listen(port,hostname,()=>{
//   console.log(`server is running successfuly at http://${hostname}:${port}`);
// });

 const myServer = http.createServer((req,res)=>{
  res.end("Hello i am server")
});


 myServer.listen(port,hostname,()=>{
  console.log(`erver is running successfuly at http://${hostname}:${port}`);
 });