<template lang="">
  <nav class="nav-wrapper">
    <Button to="/" label="Home" button-variant="link" variant="text" />
    <Button to="/about" label="About" button-variant="link" variant="text" />
    <Button
      to="/addForm"
      label="Add books"
      button-variant="link"
      variant="text"
    />
    <Button
      to="/books/bookLists"
      label="Books"
      button-variant="link"
      variant="text"
    />
  </nav>
</template>
<script setup lang="ts">
  interface navProps {
    isSelected?: boolean;
  }
  defineProps<navProps>();
</script>
<style lang="scss">
  .nav-wrapper {
    @apply bg-purple-400 p-4;
  }
</style>
