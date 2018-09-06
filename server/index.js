const express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(express.static('./client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/repos', function (req, res) {
  
});

app.get('/repos', function (req, res) {

});

let port = 7763;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
 