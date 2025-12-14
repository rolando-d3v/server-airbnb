import dotenv from "dotenv";
dotenv.config();


export const var_env = {
    PORT: process.env.PORT,
    SECRET_JWT: process.env.SECRET_JWT || "SECRETO"
}