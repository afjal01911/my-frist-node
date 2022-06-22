const fs = require('fs')
let succ = "succuseful"

fs.unlink("demo-2",(err)=>{
if (err) {
        console.log(err);    
}else{
    console.log(succ);
}
})