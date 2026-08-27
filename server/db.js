const fs = require('fs');
const path = require('path');
const knexConfig = require('./knexfile').development;
const Knex = require('knex');

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const knex = Knex(knexConfig);

// Migrations should create schema. The application exports knex for DB access.
module.exports = { knex };
