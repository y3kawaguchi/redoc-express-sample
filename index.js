const express = require('express');
const redoc = require('redoc-express');
 
const app = express();
const port = 3000;
 
// serve your swagger.json file
app.get('/docs/swagger.json', (req, res) => {
  res.sendFile('swagger.json', { root: '.' });
});
 
// define title and specUrl location
// serve redoc
app.get(
  '/docs',
  redoc({
    title: 'API Docs',
    specUrl: '/docs/swagger.json'
  })
);
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));