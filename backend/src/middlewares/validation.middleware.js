const { body, param, validationResult } = require('express-validator');
const Task = require('../models/tasksModel');


const handleError = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		res.status(422);
		res.json({ errors: errors.array() });
		return;
	}
	next();
};


const validate = (method) => {
	switch (method) {
	case 'createNewTask': {
		return [
			body('text', 'Task can\'t be empty').exists({checkFalsy: true}),
			body('day', 'Day can\'t be empty').exists({checkFalsy: true}),
			body('completed').optional().isIn([true, false]),
			handleError
		];
	}
	case 'getOneTask': {
		return [
			param('taskId', 'invalid task id')
				.isMongoId()
				.custom(async val => {
					const task = await Task.exists({ _id: val });
					return task == null ?
						Promise.reject():Promise.resolve();
				})
				.withMessage('task not found'),
			handleError
		];
	}
	case 'updateOneTask': {
		return [
			param('taskId', 'invalid task id')
				.isMongoId()
				.custom(async val => {
					const task = await Task.exists({ _id: val });
					return task == null ?
						Promise.reject():Promise.resolve();
				})
				.withMessage('task not found'),
			body('text', 'Task can\'t be empty').exists({checkFalsy: true}),
			body('day', 'Day can\'t be empty').exists({checkFalsy: true}),
			body('completed').optional().isIn([true, false]),
			handleError
		];
	}
	case 'deleteOneTask': {
		return [
			param('taskId', 'invalid task id')
				.isMongoId()
				.custom(async val => {
					const task = await Task.exists({ _id: val });
					return task == null ?
						Promise.reject():Promise.resolve();
				})
				.withMessage('task not found'),
			handleError
		];
	}
	}
};



module.exports = validate;
