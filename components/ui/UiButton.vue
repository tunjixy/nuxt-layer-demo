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
      'text-white bg-primary hover:bg-primary-dark focus:shadow-outline-primary active:bg-primary disabled:bg-primary-light/30':
        primary,
      'border border-primary text-primary hover:bg-primary hover:text-white focus:shadow-outline-primary active:bg-primary-dark disabled:opacity-50':
        outlinePrimary,
      'text-primary hover:bg-primary/10 focus:shadow-outline-primary disabled:opacity-50':
        text,
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
    class="block min-h-[42px] px-6 py-1 text-base font-semibold capitalize tracking-wide transition duration-300 ease-linear focus:bg-primary-dark focus:outline-none focus:outline-dashed focus:outline-primary disabled:cursor-not-allowed;"
    v-bind="$attrs"
  >
    <slot>Submit</slot>
    <div v-if="loading" :class="[primary ? 'spin' : 'spin-yellow']" />
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

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
    type: String as PropType<'button' | 'submit'>,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>
