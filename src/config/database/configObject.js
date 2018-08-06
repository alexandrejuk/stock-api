require('dotenv').config({ path: process.env.DOTENV_PATH });

const databaseConfigObj = {
  production: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: false,
    dialect: 'postgres',
  },
  development: {
    host: '127.0.0.1',
    port: 5432,
    database: 'testdb',
    username: 'alexandre',
    password: '123456',
    logging: false,
    dialect: 'postgres',
  },
  test: {
    host: '127.0.0.1',
    port: 5432,
    database: 'testdb',
    username: 'alexandre',
    password: '123456',
    logging: false,
    dialect: 'postgres',
  },
};

module.exports = databaseConfigObj;
