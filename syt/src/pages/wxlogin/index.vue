<template>
  <div></div>
</template>

<script setup lang="ts">

import {useRoute} from 'vue-router';

let $route = useRoute();
console.log($route.query);
</script>

<style scoped></style>
