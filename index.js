const express = require('express');
require('dotenv').config();
// import routes
const todoRoutes = require('./routes/todo');

// Running express server
const app = express();
const port = process.env.PORT || 8000;

// route middlewares
app.use('/api', todoRoutes);

// Global error-handling middleware
app.use((err, req, res, next) => {
  console.error('An error occurred:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
