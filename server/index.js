const express = require('express');
const path = require('path');

const app = express();
const clientPath = path.join(__dirname, '..', 'client/build');

app.use(express.static(clientPath));

app.get('/api/test', (req, res) => {
  res.json({ bar: 'foo' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
