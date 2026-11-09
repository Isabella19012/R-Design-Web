<script setup lang="ts">

defineProps({
  name: {
    type: String,
    required: true,

  }
})
</script>
<template>
  <div class="card">
    <h3>{{ name }}</h3>
  </div>
</template>
<style scoped>
div.card{
  border: 1px solid black;
  width: 7rem;
  background-color: rgb(154, 37, 201);

}
</style>
