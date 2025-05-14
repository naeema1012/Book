<template>
  <div>
    <button class="bg-gray-100 rounded-md px-2 py-1" @click="showModel = true">
      Show Model
    </button>
    <teleport to="body">
      <div v-if="showModel" class="model">
        <p>This is model</p>
        <button
          class="bg-gray-100 rounded-md px-2 py-1"
          @click="showModel = false"
        >
          Close Model
        </button>
      </div>
    </teleport>
  </div>
</template>
<script setup>
  const showModel = ref(false);
</script>
<style lang="scss">
  .model {
    @apply fixed top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 bg-white shadow-lg p-5;
  }
</style>
