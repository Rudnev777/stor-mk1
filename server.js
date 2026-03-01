import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = 3000;

const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'misha2005',
    database: 'store'
});

app.use(express.static('public'));

app.get('/api/users', async (req, res) => {
    try {
        const [users] = await db.query('SELECT * FROM products');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Сервер на http://localhost:${port}`);
});