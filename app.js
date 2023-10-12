const express = require('express');
const app = express();
const port = 3500;
app.use(express.static('public'))


/* app.get('/generic', (req, res)=>{
    res.sendFile(`${__dirname}/public/generic.html`)
})
 */ //otra forma de hacerlo

app.get('*', (req, res)=>{
    res.sendFile(`${__dirname}/public/404.html`)
})

app.listen(port, ()=>{
    console.log(`lisent: http://localhost:${port}`)
});
