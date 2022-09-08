const Task = require('../models/tasksModel');

const getAllTasks = async ()=> {
	try {
		const allTasks =  await Task.find({});
		return allTasks;
	} catch(error) {
		console.error(error);
	}
};

const getOneTask = async (taskId)=> {
	try {
		return await Task.findById(taskId);
	} catch(error) {
		console.error(error);
	}
};

const createNewTask = async (newTask)=> {
	try {
		return await Task.create(newTask);
	} catch(error) {
		console.error(error);
	}
};

const updateOneTask = async (taskId, updatedTask)=> {
	try {
		return await Task.findByIdAndUpdate(taskId, updatedTask, { new: true});
	} catch(error) {
		console.error(error);
	}
};

const deleteOneTask = async (taskId)=> {
	try {
		return await Task.findByIdAndDelete(taskId);
	} catch(error) {
		console.error(error);
	}
};

module.exports = {
	getAllTasks,
	getOneTask,
	createNewTask,
	updateOneTask,
	deleteOneTask,
};
