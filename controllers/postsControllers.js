
const posts = require('../posts')

const index = ((req,res) => {
    res.json(posts)
  })

const show =  (req,res) => {
    const singlePost = posts.find( post => post.title == req.params.title)
    res.json(singlePost)
  }

const store = (req,res) => {
    res.send('Rotta store: Creo un nuovo post')
  }

const update =  (req,res) => {
    res.send('Rotta update: aggiorno un post')
  }

const modify = (req,res) => {
    res.send('Rotta modify: modifico una parte del post')
  }

const destroy = (req,res) => {
    res.send('Rotta destroy: elimino un post')
  }


  module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
  }