<template>
  <header>
    <h3>Task Tracker</h3>
    <button 
      @click="toggleAddTask" 
      :style="{'background-color': color}">
      {{ text }}
    </button>
  </header>
</template>


<script>

export default {
  name: 'headerCom',

  props: {
    showAddTask: Boolean
  },
  methods: {
    toggleAddTask() {
      this.$emit('toggle-add-task', 'ADD');
    }
  },
  computed: {
    color() {
      return this.showAddTask? '#DF6C74':'#54AFBB';
    },
    text() {
      return this.showAddTask? 'Close':'Add New Task';
    }
  }
}
</script>


<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  marign-bottom: 20px;
}

button {
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
button:focus {
  outline: none;
}
button:active {
  transform: scale(0.98);
}

button-block {
  display: block;
  width: 100%;
}
</style>
