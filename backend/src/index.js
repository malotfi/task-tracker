const express = require('express'); 
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./configs/db.config');

const router = require('./routes/tasksRoute');

const app = express(); 
const PORT = process.env.PORT || 3000; 

mongoose.connect(db.CONNECTION_URL)
	.then(()=>console.log('Database is Connected'))
	.catch(err=>console.error(err));

app.use(cors());
app.use(express.json());
app.use('/api/tasks', router);

app.get('/', (req, res) => { 
	res.send('<h2>Task Tracker</h2><p>use /api</p>'); 
}); 

app.listen(PORT, () => { 
	console.log(`API is listening on port ${PORT}`); 
});
