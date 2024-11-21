const app = require('./app');
const { sequelize } = require('./src/models/deviceModel');

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        });

    }).catch((err) => {
        console.error('Database synchronization failed:', err);
});