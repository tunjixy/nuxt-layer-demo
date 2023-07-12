<template>
  <button
    class="flex items-center h-8 p-1 duration-300 rounded-full cursor-pointer w-14 focus:shadow-outline-primary focus:outline-none"
    :class="[modelValue ? 'bg-primary' : 'bg-gray-300']"
    role="checkbox"
    @click="toggle"
    @keydown.space.prevent="toggle"
  >
    <div
      class="w-6 h-6 duration-300 transform bg-white rounded-full shadow-md"
      :class="{ 'translate-x-6': modelValue }"
    />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function toggle() {
  emit('update:modelValue', !props.modelValue)
}
</script>
