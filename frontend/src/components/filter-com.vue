<template>
  <div class="filters">
    <a href="#" id="All"
      :class="{active: filter=='All'}"
      @click="toggleFilter('All')">All</a>
    <a href="#" id="Completed"
      :class="{active: filter=='Completed'}"
      @click="toggleFilter('Completed')">Completed</a>
    <a href="#" id="Active"
      :class="{active: filter=='Active'}"
      @click="toggleFilter('Active')">Active</a>
  </div>
</template>


<script>
  export default {
    name: 'filterCom',
    data() {
      return {
        filter: 'All'
      }
    },
    methods: {
      toggleFilter(filter) {
        this.filter = filter;
        this.$emit('toggle-filter', filter);
      }
    }
  }
</script>


<style scoped>
  .filters {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    padding: 5px 0;
    border-bottom: 1px solid #555;
  }

  .filters a {
    display: inline-block;
    color: #444;
    background-color: #FFF;
    margin: 0 5px;
    padding: 10px 25px;
    text-decoration: none;
    border: 1px solid #555;
    border-radius: 10px;
  }

  .filters a:hover {
    background-color: #bbbb;
  }

  .filters a.active {
    color: #FFF;
    background-color: #54AFBB;
    border: 0;
  }
</style>
