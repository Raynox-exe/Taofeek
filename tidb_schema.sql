-- ══════════════════════════════════════════════════════════════════
-- T-Shop Marketplace - Complete TiDB / MySQL Production Schema
-- ══════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'customer',
  failed_attempts INT DEFAULT 0,
  locked_until BIGINT NULL,
  password_changed_at BIGINT NULL,
  created_at BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  vendor VARCHAR(255),
  price FLOAT DEFAULT 0,
  stock INT DEFAULT 10,
  image VARCHAR(1000),
  variant VARCHAR(255),
  size VARCHAR(255),
  meta TEXT
);

CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  category VARCHAR(100) DEFAULT 'General',
  kind VARCHAR(255),
  price FLOAT DEFAULT 0,
  rating FLOAT DEFAULT 5.0,
  reviews_count INT DEFAULT 0,
  location VARCHAR(255),
  image TEXT,
  description TEXT,
  owner_email VARCHAR(255),
  vendor_email VARCHAR(255),
  verified BOOLEAN DEFAULT TRUE,
  created_at BIGINT
);

CREATE TABLE IF NOT EXISTS chat_messages (
  id VARCHAR(100) PRIMARY KEY,
  chat_id VARCHAR(255) NOT NULL,
  vendor_email VARCHAR(255) NOT NULL,
  vendor_name VARCHAR(255),
  customer_email VARCHAR(255) NOT NULL,
  customer_name VARCHAR(255),
  sender_role VARCHAR(50) DEFAULT 'customer',
  sender_email VARCHAR(255) NOT NULL,
  sender_name VARCHAR(255),
  text TEXT,
  product_context TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  created_at BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id VARCHAR(255) NOT NULL,
  customer VARCHAR(255),
  email VARCHAR(255),
  user_id INT,
  subtotal FLOAT DEFAULT 0,
  shipping FLOAT DEFAULT 0,
  tax FLOAT DEFAULT 0,
  total FLOAT DEFAULT 0,
  created_at BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT,
  name VARCHAR(255),
  price FLOAT,
  qty INT DEFAULT 1
);

CREATE TABLE IF NOT EXISTS cart_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  name VARCHAR(255),
  vendor VARCHAR(255),
  price FLOAT DEFAULT 0,
  qty INT DEFAULT 1,
  image VARCHAR(1000),
  variant VARCHAR(255),
  size VARCHAR(255),
  created_at BIGINT
);

CREATE TABLE IF NOT EXISTS wishlist (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  name VARCHAR(255),
  created_at BIGINT
);

CREATE TABLE IF NOT EXISTS vendor_applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  app_id VARCHAR(100) UNIQUE NOT NULL,
  shop_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  category VARCHAR(100) DEFAULT 'General',
  bio TEXT,
  status VARCHAR(50) DEFAULT 'Pending',
  created_at BIGINT NOT NULL,
  updated_at BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS password_resets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  token VARCHAR(255) NOT NULL,
  expires_at BIGINT NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  created_at BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  sid VARCHAR(255) NOT NULL PRIMARY KEY,
  sess JSON NOT NULL,
  expired DATETIME NOT NULL
);
