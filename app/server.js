const express = require('express');
const client = require('prom-client');
const app = express();
const port = 3000;

// Crear un contador de visitas
const counter = new client.Counter({
  name: 'node_app_requests_total',
  help: 'Total requests',
});

// Middleware para contar las solicitudes
app.use((req, res, next) => {
  counter.inc();
  next();
});

// Ruta de métricas para Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola pin final con NGINX!');
});

// Arrancar el servidor
app.listen(port, () => {
  console.log(`App corriendo en http://localhost:${port}`);
});
