const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('index.ejs')
});

// Listen to the App Engine-specified port, or 3000 otherwise
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});