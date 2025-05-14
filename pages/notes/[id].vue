<template lang="">
  <h1>
    {{ $route.params.id }}
  </h1>
  <button @click="copyUrl">Copy</button>
</template>
<script setup>
import { useClipboardCopy } from "~/composable/useClipboardcopy";
definePageMeta({
  layout: "custom",
});
const copyToClipboard = useClipboardCopy();
const copyUrl = () => {
  copyToClipboard(window.location.href);
  copyToClipboard("Akira");
};
</script>
<style lang=""></style>
