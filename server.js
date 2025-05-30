const express = require('express');
const fetch = (...args)=> import('node-fetch').then(({default: fetch})=> fetch(...args));
const app = express();
const port = 3001;

app.set('trust proxy', true);
 
app.get('/', async(req,res)=>{
    const ip = req.ip;
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    res.send(`<h1> Your Ip is Info </h1><pre>${JSON.stringify(data,null,2)}</pre>`);
});

app.listen(port,()=>{
    console.log(`Node.js running on http://localhost:${port}`);
});