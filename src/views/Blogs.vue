<script setup>
import {ref, watch} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const tagName = ref("")

watch(()=>route.params.tagName, (newValue) => {
  tagName.value = newValue 
})

</script>

<template>
      <div class="container py-5 text-center">
    <h2>ℹ️ Blogs Page</h2>
    <p>This is the about Blogs of our Vue app using Bootstrap.</p>
      {{ tagName }}
  </div>
</template>

<style scoped>
</style>