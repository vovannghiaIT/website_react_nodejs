import authRouter from "./auth";
import userRouter from "./user";
import categoryRouter from "./category";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/category", categoryRouter);

  return app.use("/", (req, res) => {
    res.send("sever on...");
  });
};

export default initRoutes;
