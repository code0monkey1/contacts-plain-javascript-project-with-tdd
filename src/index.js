const server = require('./server.js')
const contactsRouter = require('./routers/contact-router.js')


server.listen(3000,()=>{
  console.log("Server listening to port 3000")
})


// middleware to run before

server.use('/',contactsRouter)


// middleware to run after

