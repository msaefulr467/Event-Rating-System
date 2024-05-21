require('dotenv').config(); // Menggunakan dotenv untuk membaca variabel lingkungan dari file .env

const express = require('express');
const db = require('./Models');
const userRoutes = require('./Routes/users');
const feedbackRoutes = require('./Routes/feedback');

const app = express();
const PORT = process.env.PORT || 3000; // Menggunakan PORT dari variabel lingkungan atau default ke 3000 jika tidak ada

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan rute
app.use('/api', userRoutes);
app.use('/api', feedbackRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Sync database
db.sequelize.sync({ force: false }).then(() => {
    console.log('Database synchronized');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to sync database:', err);
});
