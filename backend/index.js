import express from 'express';
import dotenv from 'dotenv';
import db from './config/database.js';
import routes from './routes/routes.js';
import Users from './models/users.js';

dotenv.config();
const app = express();


try {
    await db.authenticate();
    console.log('Connection database has been established successfully.');
    await Users.sync();
} catch (error) {
    console.log('Unable to connect to the database:', error);
}

app.use(routes);
app.listen(5000, () => console.log('App listening on port 5000!'));