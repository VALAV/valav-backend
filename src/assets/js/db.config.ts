import * as dotenv from 'dotenv';
dotenv.config();

/* Configuraciones de TypeORM para establecer la conexion con la DB
*  Se usa en app.module.ts
* */

const ormConfig = {
  type: 'postgres',
  host: 'localhost',
  port: process.env.DB_PORT,
  username: 'postgres',
  password: process.env.DB_PASSWORD,
  database: 'valav',
};

export let config = JSON.parse(JSON.stringify(ormConfig));
