const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');
const summarizeRoute = require('./routes/summarizeRoute');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);
app.use('/api', summarizeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
