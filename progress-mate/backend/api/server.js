const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware example
app.use(express.json());

// Routes import example
const taskRoutes = require('./api/routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
});

