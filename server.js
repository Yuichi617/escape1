const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs')
});

app.post('/submit', (req, res) =>{
  res.render('result.ejs')
});

// Listen to the App Engine-specified port, or 3000 otherwise
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});