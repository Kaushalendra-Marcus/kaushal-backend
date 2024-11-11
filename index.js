const express = require('express');
require('dotenv').config();
const app = express();
// const port  = 3000;
const port = process.env.PORT;
app.get('/',(req,res)=>{
    res.send("Sending data through response")
})
app.get('/twitter',(req,resp)=>{
    resp.send("ID id kaushal.com")
})
app.listen(port,()=>{
    console.log(`Example are listening at port number ${port}`);
    
})