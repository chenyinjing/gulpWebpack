var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/mock/info', function (req, res) {
  res.send({
    name: 'chen',
    age: 30,
  });
});
app.put('/mock/putInfo', function (req, res) {
  console.log("req.body = ", req.body);

  res.send({
    errorNo: 0,
    msg: 'put success!',
    putInfo: {
      name: req.body.name,
      age: req.body.age,
    }
  });
});
var server = app.listen(5000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

});