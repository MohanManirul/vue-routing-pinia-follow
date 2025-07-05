
<script setup>
import { storeToRefs } from "pinia";

import { useCounterStore } from "../stores/counter";
const  counterStore= useCounterStore()
const { count ,  countDigitLength} = storeToRefs(counterStore);

</script>

<template>

<div class="d-flex justify-content-center align-items-center gap-3" > <br /> <br />
  <button class="btn btn-danger" @click="counterStore.decrement">-</button>
  <p class="mb-0">Count Value: {{ count }}</p>
  <button class="btn btn-primary" @click="counterStore.increment">+</button>
</div>
<br />
<p>Counter Moved To {{ countDigitLength }} Digit Length</p>

</template>

<style scoped></style>
