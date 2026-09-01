exports.up = async function(knex) {
  // 1. Add stock column to products if not exists
  const hasProducts = await knex.schema.hasTable('products');
  if (hasProducts) {
    const hasStock = await knex.schema.hasColumn('products', 'stock');
    if (!hasStock) {
      await knex.schema.alterTable('products', t => {
        t.integer('stock').defaultTo(10);
      });
    }
  }

  // 2. Create services table
  if (!await knex.schema.hasTable('services')) {
    await knex.schema.createTable('services', t => {
      t.increments('id').primary();
      t.string('title').notNullable();
      t.string('provider').notNullable();
      t.string('category', 100).defaultTo('General');
      t.string('kind', 255);
      t.float('price').defaultTo(0);
      t.float('rating').defaultTo(5.0);
      t.integer('reviews_count').defaultTo(0);
      t.string('location', 255);
      t.text('image');
      t.text('description');
      t.string('owner_email', 255);
      t.string('vendor_email', 255);
      t.boolean('verified').defaultTo(true);
      t.bigInteger('created_at');
    });
  }

  // 3. Create chat_messages table
  if (!await knex.schema.hasTable('chat_messages')) {
    await knex.schema.createTable('chat_messages', t => {
      t.string('id', 100).primary();
      t.string('chat_id', 255).notNullable();
      t.string('vendor_email', 255).notNullable();
      t.string('vendor_name', 255);
      t.string('customer_email', 255).notNullable();
      t.string('customer_name', 255);
      t.string('sender_role', 50).defaultTo('customer');
      t.string('sender_email', 255).notNullable();
      t.string('sender_name', 255);
      t.text('text');
      t.text('product_context');
      t.boolean('is_read').defaultTo(false);
      t.bigInteger('created_at');
    });
  }
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('chat_messages');
  await knex.schema.dropTableIfExists('services');
  if (await knex.schema.hasTable('products')) {
    const hasStock = await knex.schema.hasColumn('products', 'stock');
    if (hasStock) {
      await knex.schema.alterTable('products', t => {
        t.dropColumn('stock');
      });
    }
  }
};
