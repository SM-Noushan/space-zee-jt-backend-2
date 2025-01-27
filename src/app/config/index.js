import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT || 5001,
  dbUrl: process.env.DB_URL,
  secretToken: process.env.SECRET_TOKEN,
  serverUrl1: process.env.SERVER_URL1,
};
