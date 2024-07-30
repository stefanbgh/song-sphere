import homeRoutes from "./home.routes.js";
import authRoutes from "./auth.routes.js";
import artistRoutes from "./artist.routes.js";
import songRoutes from "./song.routes.js";
import playlistRoutes from "./playlist.routes.js";
import favoriteRoutes from "./favorite.routes.js";
import userRoutes from "./user.routes.js";
import notFoundRoutes from "./404.routes.js";

export default (app) => {
	app.use("/api/v1", homeRoutes);
	app.use("/api/v1/auth", authRoutes);
	app.use("/api/v1/artists", artistRoutes);
	app.use("/api/v1/songs", songRoutes);
	app.use("/api/v1/playlists", playlistRoutes);
	app.use("/api/v1/favorites", favoriteRoutes);
	app.use("/api/v1/users", userRoutes);
	app.use("*", notFoundRoutes);
};
