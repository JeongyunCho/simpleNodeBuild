const http = require('http');

const hostname = '127.0.0.1';
const port = 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  //this is the incoming route, just like in vue.
  let url = req.url;


  // set up some routes
  if(url == "/about"){
    res.write(`<h1>You're on the ${url} page!</h1>`);
    res.end();
  }else if (url == "/contact"){
    res.write(`<h1>You're on the ${url} page!</h1>`);
    res.end();
  }else {//this is the root -> you'll see this when you're at 3030
    res.write(`<h1>Hello World! or ate ${port}</h1>`)
    res.end('Hello World\n'); // res.end is like a php echo statement
}


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
