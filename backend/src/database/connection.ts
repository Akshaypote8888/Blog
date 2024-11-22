import { Sequelize } from "sequelize-typescript";

export const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Akki@7942',
    database: 'blog',
    models: [__dirname + '/../models']
})