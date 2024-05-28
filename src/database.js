import pg  from 'pg'
const { Pool } = pg

const dbConfig = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'chatapp',
    password: 'Admin12345',
    port: 5432
});


export default dbConfig;