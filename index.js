require('dotenv').config()
const express = require('express')
// import express from "express"
const app=express()

const port =3000
app.get('/',(req,res) =>
{
    res.send('hello world!')
})
app.get('/twitter', (req,res) =>
{
    res.send('snehasharma')
})
app.get('/login', (req,res) =>
{
    res.send('<h1>plezz login at me</h1>')
})
app.get('/youtube', (req,res) =>
{
    res.send('sneha chai or code')
})
app.listen(process.ENV.PORT, ()=>
{
    console.log(`example app listening on port ${port}`)
})