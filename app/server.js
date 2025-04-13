const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola pin final con NGINX!');
});

// Endpoint de métricas personalizadas
app.get('/metrics', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('my_app_request_count 1\n');
});

app.listen(port, () => {
  console.log(`App corriendo en http://localhost:${port}`);
});
