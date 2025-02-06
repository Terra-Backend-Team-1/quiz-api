import dotenv from "dotenv"

dotenv.config()


export const { PORT, JWT_LIFETIME, JWT_SECRET, NODE_ENV, ORIGIN, CREDENTIALS } =
	process.env;

export const MONGO_URI =
	process.env.NODE_ENV === "production"
		? process.env.MONGO_URI
		: "mongodb://127.0.0.1:27017/quiz-api";
