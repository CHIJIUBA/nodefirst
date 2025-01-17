const http = require("http");
const fs = require("fs")
const url = require("url");

const port = 8000;


const server = http.createServer((req, res) => {
    res.statusCode
    res.setHeader('Content-Type', 'text/html')

    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;

    if(pathname == '/') {
        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            res.end(data);
        });
    }
    else if(pathname == '/about') {
        fs.readFile('about.html', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            res.end(data);
        });
    }
    else if(pathname == '/contact-me') {
        fs.readFile('contact.html', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            res.end(data);
        });
    }
    else {
        res.end("<h1 style='text-align:center;'> 404 Page Not Found </h1>");
    }
})


server.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})
