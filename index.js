const express = require('express');
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
const { dbConnection } = require('./config/config.js');
const cors = require('cors');
app.use(express.json());
app.use(cors());
dbConnection();

app.use('/data', require('./routes/data.js'));

app.listen(PORT, () => {
  console.log('Server running on port'+PORT);
});