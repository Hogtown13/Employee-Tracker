import mySql from 'mysql2';
import 'dotenv/config';


const connect = mySql.createConnection({
    host: 'localhost',
    port: 3001,
    user: process.env.DB_USER,
    database:process.env.DB_NAME,
    password: process.env.DB_PW,
});

export default connect;