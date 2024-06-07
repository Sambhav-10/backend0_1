require('dotenv').config()
const express = require('express')

// in above line that line import express from express
// import express from "express"
// when i try this so show some error 

const app = express()
const port = 4400

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/about",(req,res)=>{
    res.send("aboout section")
})

// when we change in our code so we need to restart 

app.get("/login",(req,res)=>{
    res.send(`<h1>already loged in</h1>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// when we deploy our app in production so we not port 
// we don't use port this

// we nee to install some package
// npm i dotenv
// next step import - require('dotenv').config()