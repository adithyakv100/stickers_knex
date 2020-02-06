// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database : 'knex_stickers',
      user : 'postgres',
      password : 'admin'
    }}
,
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-cjs-web-store'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
