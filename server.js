const express = require('express');
const next = require('next');
const connectDb = require('./server/db'); // Import the database connection function

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

connectDb();

app.prepare().then(() => {
  const server = express();

  // API route for appointments
  server.use('/api/appointments', require('./server/routes/appointments'));

  // Default route for Next.js pages
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
