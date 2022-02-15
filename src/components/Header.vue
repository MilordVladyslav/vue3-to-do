<script setup>
defineProps({
  filters: {
    type: Array,
    required: false
  },
  activeTab: {
    type: String,
    required: false
  }
})

const emits = defineEmits(['setActive'])

function changeActive(active) {
  emits('setActive', active)
}

</script>
<template>
  <div class="header">
    <h1 class="title">Vue 3 To Do Application</h1>
    <div class="filters">
      <div :class="['filter', { 'filter-active': filter.title === activeTab }]" v-for="filter in filters" :key="filter.id" @click="changeActive(filter.title)">
        <p>{{filter.title}} ({{filter.amount}})</p>
      </div>
<!--      <div class="filter">-->
<!--        <p>Completed (21)</p>-->
<!--      </div>-->
<!--      <div class="filter">-->
<!--        <p>Left (21)</p>-->
<!--      </div>-->
    </div>
  </div>
</template>

<style scoped>
</style>
