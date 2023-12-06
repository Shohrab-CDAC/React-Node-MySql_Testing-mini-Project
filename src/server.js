const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
app.use(cors()); 

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'manager',
  database: 'webpage',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database... Now server is running on full speed');
});

// Parse incoming JSON requests
app.use(bodyParser.json());

// Handle POST requests to save data
app.post('/saveData', (req, res) => {
  const data = req.body.data;

  // Insert data into MySQL
  const sql = 'INSERT INTO your_table (column_name) VALUES (?)';
  db.query(sql, [data], (err, result) => {
    if (err) {
      res.status(500).send('Error saving data to database');
      throw err;
    }
    console.log('Data saved to database:', result);
    res.json({ message: 'Data saved successfully' });
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
