require('../src/configs/env.config');
db.createUser({
	user: MONGO_USER,
	pwd: MONGO_SECRET,
	roles: [
		{
			role: 'readWrite',
			db: MONGO_NAME
		}
	]
});
print('user created');
