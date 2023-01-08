import { Sequelize } from "sequelize-typescript";
import "dotenv/config";
import Movie from "../models/Movie.model";
import { Dialect } from "sequelize";
export class Database {
  private sequelize: Sequelize;

  constructor() {
    const dbName = process.env.DB_NAME as string;
    const dbUser = process.env.DB_USER as string;
    const dbHost = process.env.DB_HOST;
    const dbDriver = process.env.DB_DRIVER as Dialect;
    const dbPassword = process.env.DB_PASSWORD;

    this.sequelize = new Sequelize(dbName, dbUser, dbPassword, {
      host: dbHost,
      dialect: dbDriver,
    });

    this.sequelize.addModels([Movie]);
  }

  public async closeConnection() {
    await this.sequelize.close();
  }

  public async connect() {
    try {
      await this.sequelize.authenticate();
      await this.sequelize.sync({
        alter: process.env.AMBIENT === "development",
        logging: false,
      });
      console.error("database connect sucessfull");
    } catch (err) {
      console.error("failed to connect database");
    }
  }
}
 