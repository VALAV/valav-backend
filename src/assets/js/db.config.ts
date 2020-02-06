import * as dotenv from 'dotenv';

dotenv.config();

/* Configuraciones de TypeORM para establecer la conexion con la DB
*  Se usa en app.module.ts
* */

const ormConfig = {
  type: 'postgres',
  host: process.env.DB_URL,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'valav',
  entities: ['dist/modules/**/entities/*.js'],
  synchronize: false
};

export let config = JSON.parse(JSON.stringify(ormConfig));
