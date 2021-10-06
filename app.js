const express = require('express')
const app = express();
const port = 80;

app.get('/', (req, res)=>{
    req.send('Hello World!');
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});

