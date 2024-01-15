/*

              Web Server

  client (browser) <----> server (node.js)
  request               response
           HTTP Protocol
  HTTP Request:
      req line > GET(method) /index.html HTTP/1.1 
      headers > additional info about request (data)
      body > data sent to server by client (optional)

  HTTP Response:
      status line > HTTP/1.1 200 OK 200-> code 200 OK -> status text
      headers > additional info about response (data)
      body > data sent to client by server (optional)

  HTTP Methods:
      GET > get data from server
      POST > send data to server
      PUT > update data in server
      DELETE > delete data from server
      PATCH > update part of data in server

      Backend is basically about all this , what is request and what is response and how to handle them and how to send them back and forth

*/


//

//Improve your skills on Network tab in browser and see what is happening in the background when you request a page

//IP address, DNS, PortNumber, HTTP, HTTPS, TCP, UDP, OSI Model, Packets, MAC Address,... are all important concepts in Network and you should know them well to be a good backend developer and also a good frontend developer too (because you should know how the data is sent and received from server to client and vice versa)  >>  https://www.youtube.com/watch?v=3QhU9jd03a0


const http = require('http');
// http is a core module in node.js and we can use it without installing it>> https://nodejs.org/api/http.html

//createServer() is a method in http module and it takes a callback function as an argument and this callback function takes two arguments (req, res) and these two arguments are objects and they are the request and response objects that we are going to use in our callback function> req is the request object and res is the response object 




const fs = require('fs');
//fs is for file system and it is a core module in node.js and we can use it without installing it>> https://nodejs.org/api/fs.html


const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const product_1 = data.products[0];
const products = data.products;





//server -> is a function that we can call and it will return a server object and we can store it in a variable and use it later

const server = http.createServer((req, res) => {
  console.log("Server is running");
  // console.log(req.url, req.method, req.headers);
  // req.url > is the url that we are requesting
  // req.method > is the method that we are using to request the url
  // req.headers > is the headers that we are sending with our request

  // res.setHeader() > is a method that we can use to set a header for our response and it takes two arguments (headerName, headerValue) and we can set as many headers as we want > why is it important? because we can set the type of the response that we are sending to the client and we can set the status code of the response and we can set the content type of the response and so on and so forth and we can set as many headers as we want


  if (req.url.startsWith("/product")) {
    // Extracting product ID from the URL
    const product_id = req.url.split("/")[2];
    const prd = products.find(p => p.id == (+product_id));

    if (prd) {
      // Using the found product details to replace placeholders in the HTML
      let modified_index = index
        .replace("**Title**", prd.title)
        .replace("**url**", prd.thumbnail)
        .replace("**price$**", prd.price)
        .replace("**description**", prd.description);

      res.setHeader("Content-Type", "text/html");
      res.end(modified_index);
      return;
    } else {
      // Handle product not found
      res.setHeader("Content-Type", "text/html");
      res.write("<center><h1>404 Product Not Found</h1></center>");
      res.end();
      return;
    }
  }

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.write(index);
      res.end();
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.write(data);
      res.end();
      break;

    default:
      res.setHeader("Content-Type", "text/html");
      res.write("<center><h1>404 Page Not Found</h1></center>");
      res.end();
  }

  // make a web page to welcome with html css

  //res.end() > is a method that we can use to send a response to the client and it takes a string as an argument and this string will be sent to the client as a response
  // res.end(JSON.stringify(data));

});
server.listen(3000);