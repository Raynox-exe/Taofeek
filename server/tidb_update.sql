-- ══════════════════════════════════════════════════════════════════
-- T-Shop Marketplace - TiDB / MySQL Incremental Migration Script
-- Run this script if you already have the previous T-Shop database tables
-- ══════════════════════════════════════════════════════════════════

-- 1. Add Stock column to products table if missing
ALTER TABLE products ADD COLUMN IF NOT EXISTS stock INT DEFAULT 10;

-- 2. Create Services table for Artisans & Freelancers
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

-- 3. Create Chat Messages table for Customer & Vendor Real-Time Inquiries
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
