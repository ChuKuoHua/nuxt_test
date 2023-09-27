<template>
  <div class="page">
    首頁
    <div v-for="item of data" :key="item.title">
      <p>{{ item.title }}</p>
      <p>{{ item.description }}</p>
      <p>{{ item.category }}</p>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('/', () => queryContent('/test').find())
</script>

<style scoped></style>
