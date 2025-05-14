<template>
  <div class="box-wrapper">
    <Form v-for="item in formItems" :label="item" />
    <Button class="mt-2" label="Add book" type="submit" />
  </div>
</template>
<script setup>
  const formItems = {
    bookName: "Book name",
    author: "Author name",
    publish: "Published year",
    bought: "Buying year",
  };
</script>
<style lang="scss">
  .box-wrapper {
    @apply bg-white border border-gray-300 rounded-lg p-4 shadow-md flex flex-col gap-2 w-80 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
  }
</style>
