import express, { json } from "express";
import { Database } from "./DB/Database";
import movieRoutes from "./routes/movie.routes";

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
    this.express.use("/movie", movieRoutes);
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
