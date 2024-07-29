import dotenv from "dotenv";

dotenv.config();

export default {
	host: process.env.DB_HOST,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB,
	dialect: process.env.DB_DIALECT,
	port: process.env.DB_PORT,
};
