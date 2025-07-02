<script setup>
import {computed, ref, watch} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();

const tag = computed(()=>{
  return route.params.category
})

</script>

<template>
<div>
    <h1>Hello Category</h1>
    {{ tag }}
</div>
</template>

<style scoped>
</style>