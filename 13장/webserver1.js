import { createServer } from 'http';

const server = createServer
((req,res) =>{
    res.writeHead(200,{'Content-type': 'text/plain'});
     res.end("Hello World!");
});
server.listen(1000, () => {
    console.log("server listens on port 1000!");
})