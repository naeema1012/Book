<template>
  <button :class="computedClass" @click="handleClick">
    {{ label }}
  </button>
</template>
<script setup lang="ts">
  import { computed } from "vue";
  import type { NuxtLinkProps } from "nuxt/app";
  import { Variants, Colors, Sizes } from "./button.type";
  interface ButtonProps {
    label?: string;
    size?: Sizes;
    color?: Colors;
    disable?: boolean;
    type?: "button" | "reset" | "submit";
    buttonVariant?: "link" | "button";
    to?: string;
    iconName?: string;
    iconColor?: string;
    variant?: Variants;
    external?: boolean;
    target?: NuxtLinkProps["target"];
    isSelected?: boolean;
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    variant: Variants.DEFAULT,
    type: "button",
    color: Colors.BLUE,
    size: Sizes.MD,
    buttonVariant: "button",
  });
  const emits = defineEmits(["click"]);
  const computedClass = computed(() => {
    return [
      `button-wrapper`,
      `button-wrapper--${props.variant}`,
      `button-wrapper--${props.size}`,
      { "button-wrapper--selcted": props.isSelected },
    ];
  });
  function handleClick(event: Event) {
    emits("click", event);
    if (props.buttonVariant === "link") {
      navigateTo(props.to);
    }
  }
</script>
<style lang="scss">
  .button-wrapper {
    @apply cursor-pointer  rounded-lg;
    &--default {
      &--red {
        @apply bg-red-600 text-white;
      }
      @apply text-white bg-blue-600;
    }
    &--tonal {
      @apply text-gray-700;
    }
    &--outlined {
      @apply text-gray-900 border border-blue-600;
    }
    &--gray-outlined {
      @apply text-gray-900 border border-gray-600;
    }
    &--text {
      @apply text-gray-900 hover:underline;
    }
    &--xl {
      @apply px-7 py-1.5;
    }
    &--lg {
      @apply px-6 py-1.5;
    }
    &--md {
      @apply px-5 py-1.5;
    }
    &--sm {
      @apply px-4 py-1.5;
    }
    &--xs {
      @apply p-2;
    }
    &--selected {
      @apply bg-green-500 text-white font-bold border-2 border-green-700;
    }
  }
</style>
