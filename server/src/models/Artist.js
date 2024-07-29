import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const Artist = sequelize.define(
	"artists",
	{
		art_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		art_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		art_image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		art_info: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		art_popularity: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{
		tableName: "artists",
		timestamps: false,
	}
);

export default Artist;
