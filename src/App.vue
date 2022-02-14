<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import WarningMessage from './components/WarningMessage.vue'
import Form from './components/Form.vue'
import List from './components/List.vue'

let filters = ref([
  {
    title: 'All',
    isActive: true,
    id: 0,
    amount: 0
  },
  {
    title: 'Completed',
    isActive: false,
    id: 1,
    amount: 0
  },
  {
    title: 'Left',
    isActive: false,
    id: 2,
    amount: 0
  }
])

let warningMessage = ref('Everything is fine')
function changeActive(active) {
  for(let i = 0; i < filters.value.length; i++) {
    filters.value[i].isActive = filters.value[i].title === active
  }
}

function addNewItem(newItem) {
  console.log(newItem)
}

</script>

<template>
  <div class="wrapper">
    <Header :filters="filters" @setActive="(active) => changeActive(active)"></Header>
    <WarningMessage :warning="warningMessage"></WarningMessage>
    <Form @newToDo="addNewItem"></Form>
    <List></List>
  </div>
</template>

<style lang="scss">
@import "node_modules/reset-scss/reset";
#app {
  font-family: sans-serif;
  background: #4f3f49;
  height: 100vh;
  color: #fcdba5;
}
.wrapper {
  max-width: 600px;
  margin: auto;
  height: 500px;

}
.title {
  text-align: center;
}
.header {
  padding: 23px 0 4px 0;
  border-bottom: 1px solid #fcdba5;
}
.form-wrapper {
  font-size: 18px;
}
.to-do-input {
  width: 75%;
  padding: 14px 28px;
}
.submit {
  width: 25%;
  padding: 15px 0;
  background-color: #8f7277;
  cursor: pointer;
  transition: background-color 0.1s linear;
  &:hover{
    background-color: #614e51;
  }
}
.filters {
  margin: 25px 0;
  display: flex;
  justify-content: center;
  font-size: 18px;
}
.filter {
  padding: 15px 0;
  flex-grow: 1;
  text-align: center;
  background-color: #8f7277;
  cursor: pointer;
  transition: background-color 0.1s linear;
 &:hover{
  background-color: #614e51;
  }
}
.item-list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item {
  border-bottom: 1px solid #fcdba5;
  width: 100%;
  padding: 0px;
  font-size: 18px;
  display: flex;
  line-height: 2;
  justify-content: space-between;
}
.warning-message {
  margin-top: 5px;
  font-size: 14px;
  margin-bottom: 5px;
}
.actions {
  button {
    border: 1px solid #4f3f49;
    width: 30px;
    padding-top: 4px;
    background-color: #8f7277;
    transition: background-color 0.1s linear;
    &:hover{
      background-color: #614e51;
    }
  }
}
.filter-active {
  background-color:#614e51;
}
</style>
