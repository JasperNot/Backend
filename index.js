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
app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function () {
  console.log('Example aoo listening on port ' + app.get('port') + ' !')
})
