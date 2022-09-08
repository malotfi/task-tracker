<template>
  <form class="add-form">
  <div class="form-control">
    <input
      type="text"
      name="text"
      v-model="text"
      id="text"
      placeholder="Add Task"
    />
    <output class="validation-alert">
      {{ textAlert  }}
    </output>
  </div>
  <!--
  <div class="form-control">
    <label for="day">Day & Time</label>
    <input
      type="text"
      name="day"
      v-model="day"
      id="day"
      placeholder="Add Day & Time"
    />
    <output class="validation-alert">
      {{ dayAlert  }}
    </output>
  </div>
  -->
  <div class="form-control">
    <div class="datepicker">
      <Datepicker v-model="date" 
      :enableTimePicker="false"
      inline autoApply />
    </div>
    <output class="validation-alert">
      {{ dateAlert  }}
    </output>
  </div>
  <!--
    <div class="form-control form-control-check">
    <label for="reminder">Set Reminder</label>
    <input
      type="checkbox"
      name="reminder"
      v-model="reminder"
      id="reminder"
    />
  </div>
  -->
  <button 
    class="btn btn-block"
    @click="saveTask">
    Save Task
  </button>
</form>


</template>


<script>
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  
  export default {
    name: 'addTask',
    components: {
      Datepicker
    },
    data() {
      return {
        text: '',
        day: '',
        date: null,
        //reminder: false,
        completed: false,
        textAlert: '',
        dateAlert: ''
      }
    },
    props: {
      task: Object,
      addTaskAction: String
    },
    watch: {
      task: {
        handler() {
        this.text = this.task.text;
        this.date = this.task.day;
      },
        immediate: true,
        deep: true
      },
      addTaskAction: {
        handler(newAddTaskAction) {
          if(newAddTaskAction == 'ADD') this.clearForm();
      },
        immediate: true
      }
    },
    methods: {
      clearForm() {
        this.text='';
        this.date=null;
        this.textAlert='';
        this.dateAlert='';
      },
      saveTask(e) {
        e.preventDefault();
        if (!this.text) {
          this.textAlert = 'Task can\'t be empty!';
          return;
        }

        if (!this.date) {
          if (this.text) this.textAlert = '';
          this.dateAlert = 'Date can\'t be empty!';
          return;
        }


        const newTask = {
          text: this.text,
          day: this.date,
          completed: false
        }

        if (Object.prototype.toString.call(newTask.day) === '[object Date]') {
          newTask.day = newTask.day.toLocaleDateString('en-us', { 
            year:"numeric", 
            month:"short", 
            day:"numeric"
          });
        }

        if (this.addTaskAction === 'EDIT') {
          newTask._id = this.task._id;
        }

        
        this.$emit('save-task', newTask);
        this.clearForm();
      }
    }
  }
</script>


<style scoped>
  form {
  background-color: #FFF;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 1px 1px 5px  #E0E4E9, -1px -1px 5px  #E0E4E9;
}
.btn {
  display: inline-block;
  background: #54AFBB;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.form-control {
  margin: 20px 0;
}

input {
  border: 1px solid #8F8F9D;
  border-radius: 5px;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}

.add-form {
  margin-bottom: 40px;
}

.validation-alert {
  margin-left: 10px;
  color: #DF6C74;
}

.datepicker {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
