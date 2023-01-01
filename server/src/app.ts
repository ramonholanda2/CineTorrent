import express, { NextFunction, Request, Response, json } from "express";
import Movie from "./models/Movie.model";
import { Database } from "./DB/Database";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
    this.connectDB();
  }

  middlewares() {
    this.express.use(json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  routes() {
  }

  listen(port: number) {
    this.express.listen(port, () => {
      console.log("rodando na porta: " + port);
    });
  }

  connectDB() {
    new Database().connect();
  }
}

export default new App();
