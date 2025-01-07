const express = require('express')
const router = express.Router()
const posts = require('../posts')


//index
router.get('/', (req,res) => {
  res.json(posts)
})

//show
router.get('/:title', (req,res) => {
  const singlePost = posts.find( post => post.title == req.params.title)
  res.json(singlePost)
})

//store
router.post('/', (req,res) => {
  res.send('Rotta store: Creo un nuovo post')
})

//update
router.put('/:id', (req,res) => {
  res.send('Rotta update: stampo tutti i posts')
})

//modify
router.patch('/:id', (req,res) => {
  res.send('Rotta modify: stampo tutti i posts')
})

//destroy
router.delete('/:id', (req,res) => {
  res.send('Rotta destroy: stampo tutti i posts')
})

module.exports =  router