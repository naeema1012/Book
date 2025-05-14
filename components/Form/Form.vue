<template>
  <div class="form-wrapper">
    <label class="form-wrapper__label">{{ label }}</label>
    <input
      type="text"
      :placeholder="placeholder"
      class="form-wrapper__input"
      :autocomplete="autocomplete"
      v-model="inputValue"
    />
    <slot />
  </div>
</template>
<script setup lang="ts">
  interface FormProps {
    label?: string;
    modelValue?: string | Number;
    disabled?: Boolean;
    placeholder?: string;
    autocomplete?: HTMLInputElement["autocomplete"];
  }

  const props = defineProps<FormProps>();
  const emits = defineEmits(["update:modelValue"]);
  const inputValue = ref(props.modelValue);
  watch(inputValue, (newValue) => {
    // Emit the update to parent with 'update:modelValue' to allow v-model binding
    emits("update:modelValue", newValue);
  });
</script>
<style lang="scss">
  .form-wrapper {
    &__input {
      @apply border rounded-md border-gray-300 w-auto;
    }
    &__label {
      @apply mb-2 text-blue-500;
    }
  }
</style>
