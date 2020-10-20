const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile('templates/index.html',{root:__dirname})
})

app.post('/',(req,res)=>{
    let first =  Number(req.body.first) 
    let second = Number(req.body.second)
    let ans = first + second
    res.send(`Answer is ${ans}`)
})

app.listen(3000,()=>{
    console.log('I am listening!')
})