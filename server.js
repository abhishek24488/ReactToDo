
var express = require('express');
//var http= require('http');

const path = require('path');

var app = express();
const PORT = process.env.PORT || 3000;



/* var server=http.createServer(function(req,res){
    console.log(res + "..."+ req);
    res.end('test');
}); */

app.use(function(req,res,next) {
    if(req.headers['x-forwarded-proto']==='https'){
        res.redirect('http://' + req.hostname+req.url);        
    }
    else        
        next();
});
app.use(express.static('public'));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  });

app.listen(PORT, function(){
    console.log('Express server is up on port'+ PORT);
});