const tasksRepo = require('../repositories/tasksRepo');

const getAllTasks = async () => {
	return await tasksRepo.getAllTasks();
};

const getOneTask = async (taskId) => {
	return await tasksRepo.getOneTask(taskId);
};

const createNewTask = async (newTask) => {
	return await tasksRepo.createNewTask(newTask);
};

const updateOneTask = async (taskId, updatedTask) => {
	return await tasksRepo.updateOneTask(taskId, updatedTask);
};

const deleteOneTask = async (taskId) => {
	return await tasksRepo.deleteOneTask(taskId);
};

module.exports = {
	getAllTasks,
	getOneTask,
	createNewTask,
	updateOneTask,
	deleteOneTask,
};
