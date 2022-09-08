<template>
  <footer>
    <filterCom @toggle-filter="toggleFilter"/>
    <p>Copyright &copy; 2020</p>
  </footer>
</template>


<script>
  import filterCom from './filter-com.vue';

  export default {
    name: 'footerCom',
    components: {
      filterCom
    },
    methods: {
      toggleFilter(filter) {
        this.$emit('toggle-filter', filter)
      }
    }
  }
</script>


<style scoped>
  footer {
    margin-top: 30px;
    text-align: center;
  }
</style>
