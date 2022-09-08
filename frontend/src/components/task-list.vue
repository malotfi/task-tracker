<template>
  <taskItem 
    v-for="task in tasks" 
    :key="task.id"
    :task="task"
    @toggle-complition="toggleComplition"
    @toggle-edit-task="toggleEditTask"
    @edit-task="editTask"
    @delete-task="deleteTask"
    />
</template>


<script>
import taskItem from './task-item.vue';

 export default {
    name: 'taskList',
   components: {
    taskItem
   },
   props: {
    tasks: Array 
   },
   methods: {
    toggleComplition(id) {
      this.$emit('toggle-complition', id);
    },
    toggleEditTask(action) {
      this.$emit('toggle-edit-task', action);
    },
    deleteTask(id) {
      this.$emit('delete-task', id);
    },
    editTask(task){
      this.$emit('edit-task', task);
    }
   },
   emits: [
    'toggle-complition',
    'delete-task',
     'edit-task',
     'toggle-edit-task'
   ]
  }
</script>


<style scoped>

</style>
