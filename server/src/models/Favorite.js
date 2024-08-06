import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const Favorite = sequelize.define(
	"favorites",
	{
		fav_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		fav_sng_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		fav_usr_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "favorites",
		timestamps: false,
	}
);

export default Favorite;
