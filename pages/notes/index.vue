<template>
  <h1>Notes</h1>
  <h2>{{ newNote }}</h2>
  <input
    type="text"
    v-focus
    placeholder="Type new note...."
    v-model="newNote"
    class="border border-blue-300 placeholder: text-gray-400"
  />
  <div class="flex">
    <NotesCard />
  </div>
</template>
<script setup>
const newNote = ref("This is pre written value");
const vFocus = {
  mounted: (el) => el?.focus(),
};
</script>
<style>
.flex {
  display: flex;
}
</style>
