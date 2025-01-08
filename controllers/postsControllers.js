
const posts = require('../data/posts')

const index = ((req,res) => {
  const tag = req.query.tag
  let tagPosts = tag ? posts.filter(post => post.tags.includes(tag)) : posts
    return res.json(tagPosts)
  })

const show =  (req,res) => {
  const title = req.params.title
  const singlePost = posts.find( post => post.title == title)
  if(singlePost){
     return res.json(singlePost)
  } else {
    res.status(404)
    return res.json({
      message:"Post non trovato",
      status: "404",
      error: "not found"
    })
  }

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

  const id = req.params.id
  //estraggo l'elemento dall'array posts 
  const post = posts.find( post => post.id == id)

  //se non è presente il post con ID passato allora devo restituire errore
   if(!post){
     res.status(404)
     return res.json({
       message:'Post non trovato',
       status: '404',
       error: 'not found'
     })
   }

 posts.splice(posts.indexOf(post), 1)
 console.log(posts)

 res.sendStatus(204)
  }
  
  module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
  }