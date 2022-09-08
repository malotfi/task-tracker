require('dotenv').config();

module.exports = {
	PORT: process.env.PORT,
	MONGO_NAME: process.env.MONGO_NAME,
	MONGO_USER: process.env.MONGO_USER,
	MONGO_SECRET: process.env.MONGO_SECRET
};
