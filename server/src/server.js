import express from "express";

import { port } from "./constants/port.constant.js";
import { connectToDb } from "./db/index.js";
import routes from "./routes/index.js";

import middlewares from "./middlewares/index.js";

const app = express();

middlewares(app);
routes(app);

app.listen(port, async () => {
	console.log(`Server listening on port: http://localhost:${port}`);

	await connectToDb();
});

process.on("unhandledRejection", (reason, promise) => {
	console.error("Unhandled Rejection at:", promise, "reason:", reason);

	process.exit(1);
});
