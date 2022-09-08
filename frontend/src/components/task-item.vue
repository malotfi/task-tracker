<template>
<div class="task">
  <span>
    <font-awesome-icon
      class="end"
      @click="editTask(task)"
      :style="{ color: '#54AFBB' }"
      icon="fa-solid fa-edit">
    </font-awesome-icon>
    <font-awesome-icon
      class="end"
      @click = "deleteTask(task._id)"
      :style="{ color: '#DF6C74' }"
      icon="fa-solid fa-times"
    ></font-awesome-icon>
  </span>
  <h3>     
    <font-awesome-icon
      class="start"
      @click = "toggleComplition(task)"
      :style="{ color: '#444' }"
      :icon="taskCompletion"
    ></font-awesome-icon>
    <span
      :style="{'text-decoration': taskDecoration}">
    {{ task.text }}
    </span>
  </h3>
  <p>{{ task.day }}</p>
</div>

</template>


<script>
 export default {
    name: 'taskItem',
   props: {
    task: {}
   },
   methods: {
    toggleComplition(id) {
      this.$emit('toggle-complition', id);
    },
    deleteTask(id) {
      this.$emit('delete-task', id);
    },
    editTask(task) {
      this.$emit('edit-task', task);
      this.$emit('toggle-edit-task', 'EDIT');
    }
   },
   computed: {
     taskCompletion() {
      return this.task.completed?'fa-solid fa-check-square':'fa-solid fa-square';
     },
     taskDecoration() {
      return this.task.completed ? 'line-through' : 'none';
     }
   }
  }
</script>


<style scoped>
.task {
  background: #FFFFFF;
  margin: 20px 0px;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 1px 1px 5px  #E0E4E9, -1px -1px 5px  #E0E4E9;
}

.task.reminder {
  border-left: 5px solid #2471FF;
}

h3 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

span {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 5px;
}

.end {
  margin-left: 5px;
}

.start {
  margin-right: 10px;
}
</style>
