const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const DB_FILE = path.join(__dirname, 'data', 'db.sqlite');

// Support DATABASE_URL or explicit MYSQL_* env vars; fallback to sqlite file
module.exports = {
  development: (() => {
    if (process.env.DATABASE_URL) {
      return {
        client: process.env.DB_CLIENT || 'mysql2',
        connection: process.env.DATABASE_URL
      };
    }
    if (process.env.DB_CLIENT === 'mysql2' || process.env.MYSQL_HOST) {
      return {
        client: 'mysql2',
        connection: {
          host: process.env.MYSQL_HOST || '127.0.0.1',
          port: Number(process.env.MYSQL_PORT) || 3306,
          user: process.env.MYSQL_USER || 'root',
          password: process.env.MYSQL_PASSWORD !== undefined ? process.env.MYSQL_PASSWORD : '',
          database: process.env.MYSQL_DATABASE || 't-shop'
        }
      };
    }
    return {
      client: 'sqlite3',
      connection: { filename: DB_FILE },
      useNullAsDefault: true
    };
  })()
};
