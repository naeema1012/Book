<template lang="">
  <div>
    {{ title }}
  </div>
  <h3>{{ hello() }}</h3>
</template>
<script setup lang="ts">
const title = ref("Composition Api");
const hello = () => {
  return "hello from composition api";
};
onMounted(() => {
  title.value = "Now new value";
});
</script>
<style lang=""></style>
