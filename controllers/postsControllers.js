
const posts = require('../data/posts')

const index = ((req,res) => {
  const tag = req.query.tag
  let tagPosts = tag ? posts.filter(post => post.tags.includes(tag)) : posts
    return res.json(tagPosts)
  })

const show =  (req,res) => {
  const id = req.params.id
  const singlePost = posts.find( post => post.id == id)
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
  console.log(req.body) 
  
  //creo un nuovo ID
  const id = posts.at(-1).id + 1

  //recupero dentro un oggetto i dati inseriti nel body della req

  const newPost = {
    id,
    ...req.body
  }

  //pusho il nuovo oggetto nell'array posts
  posts.push(newPost)

  //visualizzo nel terminale tutto l'array
  console.log(posts)

  //Cambio lo status del client e visualizzo il post aggiunto
  return res.status(201).json(newPost)
  
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