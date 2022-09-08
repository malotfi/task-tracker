const tasksRepository = require('../repositories/tasksRepository');

const getAllTasks = async (req, res) =>  {
	const allTasks = await tasksRepository.getAllTasks();
	res.json({ status: 'OK', data: allTasks });
};

const getOneTask = async (req, res) => {
	const taskId = req.params.taskId;
	const task = await tasksRepository.getOneTask(taskId);
	res.send({ status: 'OK', data: task });
};

const createNewTask = async (req, res) => {
	const newTask =  req.body;
	const createdTask = await tasksRepository.createNewTask(newTask);
	res.send({ status: 'OK', data: createdTask });
};

const updateOneTask = async (req, res) => {
	const taskId = req.params.taskId;
	const task = req.body;
	const updatedTask = await tasksRepository.updateOneTask(taskId, task);
	res.send({ status: 'OK', data: updatedTask });
};

const deleteOneTask = async (req, res) => {
	const taskId = req.params.taskId;
	const deletedTask = await tasksRepository.deleteOneTask(taskId);
	res.send({ status: 'OK', data: deletedTask });
};

module.exports = {
	getAllTasks,
	getOneTask,
	createNewTask,
	updateOneTask,
	deleteOneTask,
};
