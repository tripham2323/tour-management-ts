import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME, // Tên database
  process.env.DATABASE_USERNAME, // Username đăng nhập,
  process.env.DATABASE_PASSWORD, // Mật khẩu
  {
    host: process.env.DATABASE_HOST, // Link host database
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connect success");
  })
  .catch((error) => {
    console.error("connect error", error);
  });

export default sequelize;
