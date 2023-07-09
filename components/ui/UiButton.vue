<template>
  <button
    :loading="loading"
    :rounded="rounded"
    :roundedFull="roundedFull"
    :raised="raised"
    :full="full"
    :small="small"
    :primary="primary"
    :outlinePrimary="outlinePrimary"
    :red="red"
    :text="text"
    :center="center"
    :class="{
      'min-h-[30px]': small,
      'min-h-[50px]': large,
      'btn-primary': primary,
      'btn-outline-primary': outlinePrimary,
      'btn-text': text,
      'btn-red': red,
      'shadow-btn': raised,
      'rounded-md': rounded,
      'rounded-full': roundedFull,
      'w-full': full,
      'mx-auto': center,
      'flex items-center justify-center': loading,
    }"
    :type="type"
    :disabled="disabled"
    class="block btn"
    v-bind="$attrs"
  >
    <slot>Submit</slot>
    <div
      v-if="loading"
      :class="{ spin: primary, 'spin-yellow': outlinePrimary }"
    />
  </button>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  outlinePrimary: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  red: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
  raised: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  roundedFull: {
    type: Boolean,
    default: false,
  },
  full: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<"button" | "submit">,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
