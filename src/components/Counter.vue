
<script setup>
    const props = defineProps(["count"]);
    const count = props.count
</script>


<template>
    <div>
        <p>In Counter Component , Count Value : {{ count }}</p>
    </div>
</template>

<style scoped>
    
</style>