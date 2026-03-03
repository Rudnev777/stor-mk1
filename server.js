import express from 'express';
import {Pool} from 'pg';


const app = express();
const port = 3000;

// const db = await mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'misha2005',
//     database: 'store'
// });

const db = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'misha2005',
    database: 'store',
    port: 5432,
});


app.use(express.static('public'));

app.get('/api/users', async (req, res) => {
    try {
        // Для PostgreSQL используется result.rows, а не деструктуризация [users]
        const result = await db.query('SELECT * FROM products');
        console.log('✅ Запрос выполнен, получено записей:', result.rowCount);
        res.json(result.rows);
    } catch (error) {
        console.error('❌ Ошибка запроса:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/product/:id', async (req, res) => {
    try {
        const productId = req.params.id;

        // Проверяем, что ID - число
        if (isNaN(productId)) {
            return res.status(400).json({ error: 'Некорректный ID товара' });
        }

        // Поиск товара по ID
        const result = await db.query('SELECT * FROM products WHERE id = $1', [productId]);

        // Проверяем, найден ли товар
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Товар не найден' });
        }

        // Возвращаем найденный товар
        res.json(result.rows[0]);

    } catch (error) {
        console.error('❌ Ошибка получения товара:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Сервер на http://localhost:${port}`);
});