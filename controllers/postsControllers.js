
const posts = require('../data/posts')

const index = ((req,res) => {
  const tag = req.query.tag
  let tagPosts = tag ? posts.filter(post => post.tags.includes(tag)) : posts
    return res.json(tagPosts)
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
 //estraggo l'elemento dall'array posts 
  const id = req.params.id
  //estraggo l'elemento dall'array posts 
  const post = posts.find( post => post.id == id)

  //se non è presente la pizza con ID passato allora devo restituire errore
  if(!post){
    res.status(404)
    return res.json({
      message:'Post non trovato',
      status: '404',
      errorç: 'not found'
    })
  }

  posts.splice(posts.indexOf(post), 1)

 console.log(posts)

 return res.json(posts)



  
  // if(req.params.id){
  //   posts.splice(posts.indexOf(req.param.id, 1))
  }
  


  module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
  }