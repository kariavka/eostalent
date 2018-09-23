require('dotenv').config();
const app = require('express')();
const cors = require('cors');
const userRoutes = require('./api/user/user.route');
const io = require('./utils/io');

app.use(cors());

app.use('/users', userRoutes);

const server = app.listen(process.env.PORT, () => console.info(`Example app listening on port ${process.env.PORT}!`));

io.connect(server);