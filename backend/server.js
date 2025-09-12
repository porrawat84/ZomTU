console.log('--- server.js loaded ---');

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // เพิ่มสำหรับอ่าน JSON body

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup'
});

// ✅ API สมัครสมาชิก
app.post('/signup', (req, res) => {
  const sql = "INSERT INTO login (phone, password) VALUES (?, ?)";
  const values = [req.body.phone, req.body.password];
  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    return res.json({ success: true });
  });
});

// ✅ API ล็อกอิน
app.post('/login', (req, res) => { // แก้ path
    const sql = "SELECT * FROM login WHERE phone = ? AND password = ?";
    const values = [
        req.body.phone,
        req.body.password,
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

console.log('Starting server...');
app.listen(8081, () => {
    console.log('listening');
})