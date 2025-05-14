<template>
  <p>This is child component</p>
  <p>{{ message }}</p>
  <button
    @click="sendUpdate()"
    class="border border-blue-300 rounded-md px-3 py-1.5"
  >
    Click
  </button>
  <slot />
</template>
<script setup>
  const emit = defineEmits(["update"]);
  const props = defineProps({
    message: {
      type: String,
      default: "this is a default value",
    },
  });
  const sendUpdate = () => {
    emit("update", "value from child");
  };
</script>
