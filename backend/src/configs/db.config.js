const CONNECTION_URL = 'mongodb://mongo:mongo100@localhost:27017/db_tasks_dev';
const OPTIONS = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
};

module.exports = {
	CONNECTION_URL,
	OPTIONS
};
