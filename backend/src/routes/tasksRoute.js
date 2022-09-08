const express = require('express');
const taskController = require('../controllers/tasksController');
const validate = require('../middlewares/validation.middleware');

const router = express.Router();

router.get('/', taskController.getAllTasks);

router.get('/:taskId', validate('getOneTask'), taskController.getOneTask);

router.post('/', validate('createNewTask'), taskController.createNewTask);

router.put('/:taskId', validate('updateOneTask'), taskController.updateOneTask);

router.delete('/:taskId', validate('deleteOneTask'), taskController.deleteOneTask);

module.exports = router;
