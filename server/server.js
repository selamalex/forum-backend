const http= require('http');
const app=require('./index');

const port= process.env.port || 5500;
const server= http.createServer(app);
server.listen(port,()=> {
    console.log(`Started on port ${port}`);
});

