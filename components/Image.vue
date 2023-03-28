<template>
  <p align="center">
    <img :src="src" :alt="alt" />
  </p>
</template>
<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>();
</script>
