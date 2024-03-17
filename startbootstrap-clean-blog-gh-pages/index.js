const express = require('express')
const path = require('path')

const app = new express()

app.use(express.static('public'))



app.get('/', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'pages/index.ejs'))
})
app.get('/about', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/about.ejs'))
  })

  app.get('/contact', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/contact.ejs'))
  })

  app.get('/post', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/post.ejs'))
  })

app.listen(4000, ()=>{
    console.log('app is listening port 4000')
})
