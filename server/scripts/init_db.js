#!/usr/bin/env node
// init_db.js - create database and application user for MySQL (useful for XAMPP)
const mysql = require('mysql2/promise');
require('dotenv').config();

const host = process.env.MYSQL_HOST || '127.0.0.1';
const port = Number(process.env.MYSQL_PORT || 3306);
const rootUser = process.env.MYSQL_ROOT_USER || 'root';
const rootPass = process.env.MYSQL_ROOT_PASSWORD || '';
const dbName = process.env.MYSQL_DATABASE || 'T-SHOP';
const appUser = process.env.MYSQL_USER || 'tshop';
const appPass = process.env.MYSQL_PASSWORD || 'tshop';

async function main() {
  console.log(`Connecting to ${host}:${port} as ${rootUser} to ensure database ${dbName} and user ${appUser}`);
  const conn = await mysql.createConnection({ host, port, user: rootUser, password: rootPass });
  try {
    await conn.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    await conn.query(`CREATE USER IF NOT EXISTS '${appUser}'@'%' IDENTIFIED BY '${appPass}'`);
    await conn.query(`CREATE USER IF NOT EXISTS '${appUser}'@'localhost' IDENTIFIED BY '${appPass}'`);
    // Grant only necessary privileges to application user
    await conn.query(`GRANT SELECT, INSERT, UPDATE, DELETE ON \`${dbName}\`.* TO '${appUser}'@'%'`);
    await conn.query(`GRANT SELECT, INSERT, UPDATE, DELETE ON \`${dbName}\`.* TO '${appUser}'@'localhost'`);
    await conn.query('FLUSH PRIVILEGES');
    console.log('Database and user ensured.');
    console.log('Note: GRANTed only SELECT, INSERT, UPDATE, DELETE to application user.');
  } finally {
    await conn.end();
  }
}

main().catch(err => {
  console.error('Error initializing DB:', err.message || err);
  process.exit(1);
});
