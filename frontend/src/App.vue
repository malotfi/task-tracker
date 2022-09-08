<template>
  <headerCom 
  :showAddTask="showAddTask"
  @toggle-add-task="toggleAddTask"
  />
  <addTask 
  v-if="showAddTask"
  :task="task"
  :addTaskAction="addTaskAction"
  @save-task="saveTask"
  />
  <taskList 
  :tasks="tasksToShow" 
  @toggle-complition="toggleTaskComplition"
  @toggle-edit-task="toggleAddTask"
  @deleteTask="deleteTask"
  @edit-task="setForEdit"
  />
  <footerCom @toggle-filter="toggleFilter"/>
</template>

<script>
import headerCom from './components/header-com.vue'
import addTask from './components/add-task.vue';
import taskList from './components/task-list.vue'
import footerCom from './components/footer-com.vue'

export default {
  name: 'App',
  components: {
    headerCom,
    addTask,
    taskList,
    footerCom
  },
  data() {
    return {
      tasks: [],
      filteredTasks: {All:[],Completed:[],Active:[]},
      tasksToShow: [],
      task: {},
      showAddTask: false,
      addTaskAction: '',
      filter: 'All'
    }
  },
  methods: {
    async addNewTask(task) {
      const newTask = await fetch('/api/tasks', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
      });
      const res = await newTask.json();
      this.tasks.push(res.data);
    },
    setForEdit(task) {
      this.task = task;
    },
    async editTask(task) {
      const updatedTask = await fetch(`/api/tasks/${task._id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
      });
      const res = await updatedTask.json();
      this.tasks = this.tasks
        .map(t => t._id == task._id?
        res.data:t); 
    },
    saveTask(task) {
      if(this.addTaskAction === 'ADD') this.addNewTask(task);
      if(this.addTaskAction === 'EDIT') {
        this.editTask(task);
        this.addTaskAction = 'ADD';
      }
    },
    toggleFilter (filter) {
      this.filter = filter;
    },
    toggleAddTask(action) {
      this.addTaskAction = action;
      if (action == 'EDIT' && this.showAddTask == true) return
      this.showAddTask = !this.showAddTask; 
    },
    async toggleTaskComplition(task) {
        const updatedTask = await fetch(`/api/tasks/${task._id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ ...task, completed: !task.completed })
      });
      const res = await updatedTask.json();
      this.tasks = this.tasks
        .map(t => t._id == task._id?
        res.data:t); 
    },
    async deleteTask(id) {
      const deletedTask = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
      const res = await deletedTask.json();
      this.tasks = this.tasks
        .filter(task => task._id != res.data._id);
    },
    async fetchAllTasks() {
      const allTasks = await fetch('/api/tasks');
      const res =  await allTasks.json();
      return res.data;
    },
    filterTasks (filter) {
        switch (filter) {
        case 'All':
          this.tasksToShow = this.filteredTasks.All;
          break;
        case 'Completed':
          this.tasksToShow = this.filteredTasks.Completed;
          break;
        case 'Active':
          this.tasksToShow = this.filteredTasks.Active;
          break;
        }

    }
  },
  watch: {
    tasks: {
      handler(newTasks) {
        this.filteredTasks.All= newTasks;
        this.filteredTasks.Completed= newTasks.filter(task => task.completed == true);
        this.filteredTasks.Active= newTasks.filter(task => task.completed == false);
        this.filterTasks(this.filter);
      },
      immediate: true,
      deep: true
    },
    filter: {
      handler(newFilter) {
        this.filterTasks(newFilter);
      },
      immediate: true
    }
  },
  async created() {
    this.tasks = await this.fetchAllTasks();
    this.tasksToShow = this.tasks;
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "verdana", sans-serif;
  color: #444;
  background-color: #FEE1B4;
}

#app {
  max-width: 600px;
  background-color:#F6F7FC;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #E0E4E9, -2px -2px 5px #E0E4E9;
}
</style>
