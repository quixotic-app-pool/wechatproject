var app = require('express')();
app.get('/',function(req, res, next){

  res.send("come from my Michael Chen")

})

app.listen(8080);
console.log('Listening 8080...')
