<template>
  <button @click="toggle" :style="{'background-color': color}">{{ text }}</button>
</template>

<script>
export default {
  name: 'buttonCom',
  props: {
    text: String,
    color: String
  },
  methods: {
    toggle() {
      this.$emit('toggle-add-task', 'ADD');
    }
  }

}
</script>

<style scoped>
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
