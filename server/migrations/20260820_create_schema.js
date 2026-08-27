/**
 * Migration: create initial schema for T-Shop
 */
exports.up = async function(knex) {
  if (!await knex.schema.hasTable('products')) {
    await knex.schema.createTable('products', t => {
    t.increments('id').primary();
    t.string('name').notNullable();
    t.string('vendor');
    t.float('price').defaultTo(0);
    t.string('image');
    t.string('variant');
    t.string('size');
    t.text('meta');
    });
  }

  if (!await knex.schema.hasTable('cart_items')) {
    await knex.schema.createTable('cart_items', t => {
    t.increments('id').primary();
    t.integer('product_id');
    t.string('name');
    t.string('vendor');
    t.float('price').defaultTo(0);
    t.integer('qty').defaultTo(1);
    t.string('image');
    t.string('variant');
    t.string('size');
    t.bigInteger('created_at');
    });
  }

  if (!await knex.schema.hasTable('wishlist')) {
    await knex.schema.createTable('wishlist', t => {
    t.increments('id').primary();
    t.integer('product_id');
    t.string('name');
    t.bigInteger('created_at');
    });
  }

  if (!await knex.schema.hasTable('orders')) {
    await knex.schema.createTable('orders', t => {
    t.increments('id').primary();
    t.string('order_id');
    t.string('customer');
    t.string('email');
    t.integer('user_id');
    t.float('subtotal');
    t.float('shipping');
    t.float('tax');
    t.float('total');
    t.bigInteger('created_at');
    });
  }

  if (!await knex.schema.hasTable('users')) {
    await knex.schema.createTable('users', t => {
    t.increments('id').primary();
    t.string('name');
    t.string('email').unique();
    t.string('password');
    t.integer('failed_attempts').defaultTo(0);
    t.bigInteger('locked_until').nullable();
    t.bigInteger('password_changed_at').nullable();
    t.bigInteger('created_at');
    });
  }

  if (!await knex.schema.hasTable('order_items')) {
    await knex.schema.createTable('order_items', t => {
    t.increments('id').primary();
    t.integer('order_id');
    t.integer('product_id');
    t.string('name');
    t.float('price');
    t.integer('qty');
    });
  }

  if (!await knex.schema.hasTable('password_resets')) {
    await knex.schema.createTable('password_resets', t => {
    t.increments('id').primary();
    t.integer('user_id');
    t.string('token');
    t.bigInteger('expires_at');
    t.boolean('used').defaultTo(false);
    t.bigInteger('created_at');
    });
  }
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('password_resets');
  await knex.schema.dropTableIfExists('order_items');
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('orders');
  await knex.schema.dropTableIfExists('wishlist');
  await knex.schema.dropTableIfExists('cart_items');
  await knex.schema.dropTableIfExists('products');
};
