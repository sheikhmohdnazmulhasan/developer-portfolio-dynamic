import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  db_connection_string: process.env.DB_CONNECTION_STRING,
  jwt_secret: process.env.JWT_SECRET,
  email_sender_address: process.env.EMAIL_SENDER_ADDRESS,
  email_sender_app_password: process.env.EMAIL_SENDER_APP_PASSWORD,
};
