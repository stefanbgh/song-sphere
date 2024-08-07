import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const Song = sequelize.define(
	"songs",
	{
		sng_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		sng_title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sng_lyrics: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sng_path: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sng_art_id: {
			type: DataTypes.INTEGER,
		},
		sng_popularity: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{
		tableName: "songs",
		timestamps: false,
	}
);

export default Song;
