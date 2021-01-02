const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs')
});

app.post('/submit', (req, res) =>{
  //console.log(req.body.id);
  res.render('result.ejs', {id: req.body.id})
});

// Listen to the App Engine-specified port, or 3000 otherwise
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});