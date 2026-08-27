const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const DB_FILE = path.join(__dirname, 'data', 'db.sqlite');

// Support DATABASE_URL or explicit MYSQL_* env vars; fallback to sqlite file
const getDbConfig = () => {
  if (process.env.DATABASE_URL) {
    return {
      client: process.env.DB_CLIENT || 'mysql2',
      connection: process.env.DATABASE_URL
    };
  }
  if (process.env.DB_CLIENT === 'mysql2' || process.env.MYSQL_HOST) {
    const conn = {
      host: process.env.MYSQL_HOST || '127.0.0.1',
      port: Number(process.env.MYSQL_PORT) || 3306,
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD !== undefined ? process.env.MYSQL_PASSWORD : '',
      database: process.env.MYSQL_DATABASE || 't-shop'
    };
    if (process.env.MYSQL_SSL === 'true' || process.env.MYSQL_HOST.includes('tidbcloud.com') || process.env.MYSQL_HOST.includes('aivencloud.com')) {
      conn.ssl = { minVersion: 'TLSv1.2', rejectUnauthorized: true };
    }
    return {
      client: 'mysql2',
      connection: conn,
      migrations: {
        directory: path.join(__dirname, 'migrations')
      }
    };
  }
  return {
    client: 'sqlite3',
    connection: { filename: DB_FILE },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, 'migrations')
    }
  };
};

module.exports = {
  development: getDbConfig(),
  production: getDbConfig()
};
