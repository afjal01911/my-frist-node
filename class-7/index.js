const http = require("http");
const fs = require("fs");
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./file/index.html", (err, data) => {
      if(err){
        console.log(err);
      }else{
        res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("./file/about.html", (err, data) => {
     if(err){
        console.log(err);
     }else{
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
     }
    });
  } else if (req.url === "/contract") {
    fs.readFile("./file/contract.html", (err, data) => {
     if (err) {
console.log(err);        
     }else{
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
     }
    });
  }
   else {
    fs.readFile("./file/error.html", (err, data) => {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log("Server is running ");
});
