const express = require('express');
const cors = require('cors');
const deviceRoutes = require('./src/routes/deviceRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/devices', deviceRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;