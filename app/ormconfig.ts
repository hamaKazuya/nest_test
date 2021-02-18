require('dotenv').config()
module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['lib/entities/**/*.entity{.ts,.js}'],
  migrations: ['lib/migrations/**/*.js'],
  synchronize: true,
  cli: {
    migrationsDir: 'src/migrations',
  },
}
