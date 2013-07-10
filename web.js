var express = require('express');

var app = express.createServer(express.logger());
var fs = require("fs");
app.get('/', function(request, response) {
//  response.send("Hallo Welt")});

if (fs.statSync(filename).isDirectory()) filename += '/index.html';

fs.readFile(filename, "binary", function(err, file) {

      if(err) {        

        response.writeHead(500, {"Content-Type": "text/plain"});

        response.write(err + "\n");

        response.end();


        return;


      }


      response.writeHead(200);


      response.write(file, "binary");


      response.end();


    });
});


var  port = process.env.PORT || 5000;
app.listen(port, function() {
console.log("Listening on " + port);
});
      
