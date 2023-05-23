const express = require('express');
const app = express();

function handleAll(req,res)
{
    return res.send("Hello World!");
}

app.get('/', handleAll);

app.listen(3000,()=>{
        console.log('server running on the port 3000');

});