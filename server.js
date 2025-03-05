const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

// Налаштування статичної папки для зображень та HTML
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для головної сторінки
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
