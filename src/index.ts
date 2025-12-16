import express from "express";
import morgan from "morgan";
import cors from "cors";
import { var_env } from "./config/var_env";

// routes
import authRoutes from './api/auth/auth.routes';
import userRoutes from './api/user/user.routes';
import rentaRoutes from './api/renta/renta.routes';


const app = express();
const port = var_env.PORT

app.listen(port, () => {
  console.log(`🔥  🚀  server runn port ➡️ ... ${port} 😃  ✔️`);
});

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// static files
// app.use(express.static("Data"));
// app.use("/file-permiso",express.static("Data_permiso"));



// endpoints
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/renta", rentaRoutes);

