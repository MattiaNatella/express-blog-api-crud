const {log} = require('console')
const express = require('express')
const app = express()
const postsRouters = require('./routers/posts')
const port = 3000

app.use(express.json())

app.use('/posts', postsRouters)

app.listen(port, () =>{
    log('sono in ascolto alla porta 3000')
})