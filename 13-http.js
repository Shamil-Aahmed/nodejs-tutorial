const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url =='/'){
        res.write("<h1>welcome my son 'of a bitch'</h1>")
        res.end()
    }
    else{
    res.write("<h1>go back to homepage mf! \n</h>")
    res.end("<p> <a href='/'> Go Back </a> </p>")
    }
 
})

server.listen(5000)