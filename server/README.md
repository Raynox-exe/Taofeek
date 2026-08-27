# T-Shop Backend

This is a minimal Node.js + Express backend using Knex with SQLite fallback or MySQL to support the T-Shop demo.

Features
- Serves `index.html` static frontend (from parent folder)
- REST endpoints:
  - `GET /api/products`
  - `GET /api/cart`, `POST /api/cart`, `PUT /api/cart/:id`, `DELETE /api/cart/:id`, `DELETE /api/cart`
  - `GET /api/wishlist`, `POST /api/wishlist`, `DELETE /api/wishlist/:product_id`
  - `POST /api/orders`, `GET /api/orders`
- Persists data to `server/data/db.sqlite` (when using SQLite) or to the configured MySQL database.

Quick start (SQLite fallback)
```bash
cd server
npm install
npm run dev   # requires nodemon
# or
npm start
```

Server will run on `http://localhost:3000` and serve the frontend from the parent folder (project root). Ensure `index.html` is in the project root.

Run with MySQL using docker-compose (recommended for local MySQL):

```bash
docker compose up -d
```

Run with XAMPP / local MySQL
 - Ensure XAMPP MySQL is running and you have a root user/password.
 - Copy `.env.example` to `.env` and update credentials.
 - Run `npm run init-db` to create the application database and user.
 - Start server with `npm start`.

Example using XAMPP defaults:

```bash
cp .env.example .env
# adjust MYSQL_ROOT_PASSWORD if your XAMPP root account has a password
npm run init-db
npm start
```

Environment variables (optional):

- `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DATABASE` - when set, server uses MySQL via Knex
- `DB_CLIENT` - override knex client (e.g., `mysql2` or `sqlite3`)

Notes:
- Passwords are stored in plaintext in this demo; do not use in production.

Authentication
- POST `/api/auth/register` { name, email, password } -> registers and sets session
- POST `/api/auth/login` { email, password } -> logs in and sets session
- GET `/api/auth/me` -> returns current user (based on session)

Smoke test
Run the simple smoke test after starting the server:

```bash
node test/smoke.js
```

Docker
Build and run:

```bash
docker build -t tshop-backend .
docker run -p 3000:3000 tshop-backend
```
