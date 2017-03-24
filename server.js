const http = require("http");

const PORT = 8080;

const server = http.createServer((req,res) => {
    res.end("Hello Universe");

});

server.listen(PORT,(err) => {
    if(err) {
        return console.error(err);

    }

   console.log('Server is listening on port ${PORT}...');
});

