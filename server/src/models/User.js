import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const User = sequelize.define(
	"users",
	{
		usr_id: {
			type: DataTypes.STRING, // UUID
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		usr_firstname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		usr_lastname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		usr_email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		usr_password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "users",
		timestamps: false,
	}
);

export default User;
