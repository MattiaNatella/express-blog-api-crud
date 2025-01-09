const {log} = require('console')
const express = require('express')
const app = express()
const postsRouters = require('./routers/posts')
const notFound = require('./middlewares/notFound.js')   
const errorHandler = require('./middlewares/errorHandler.js')


const port = 3000

//inserisco il body-parser per tradutte il formato della request-body e poterla utilizzare
app.use(express.json())

app.use('/posts', postsRouters)


//inserisco il middleware della gestione degli errori DOPO le rotte
app.use(errorHandler)

//inserisco il middleware in fondo a tutto DOPO le rotte e la gestione degli errori
app.use(notFound)

app.listen(port, () =>{
    log('sono in ascolto alla porta 3000')
})