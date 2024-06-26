import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './config/db';
import eventRoutes from './routes/eventRoutes';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB()
  .then(() => {
    // Routes
    app.use('/api', eventRoutes);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });
