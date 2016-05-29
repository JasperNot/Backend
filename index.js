var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.get('/:number', function (req, res) {
var result = {
data: parseInt(req.params.number, 10) * 2
};
res.send(result);
});
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
