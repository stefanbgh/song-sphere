import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const Playlist = sequelize.define(
	"playlists",
	{
		ply_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		ply_sng_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		ply_usr_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: "playlists",
		timestamps: false,
	}
);

export default Playlist;
