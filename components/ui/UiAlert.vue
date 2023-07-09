<template>
  <div
    v-if="alertShow"
    :class="alertStyle"
    class="relative px-4 py-3 mb-4 rounded"
    role="alert"
  >
    <slot />
    <button
      v-if="alertShowCloseBtn"
      @click="closeAlert"
      class="absolute top-0 bottom-0 right-0 px-4 py-3 ml-10"
    >
      <TimesIcon :class="alertStyle" class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import TimesIcon from '@/assets/icons/times.svg?component'

type STATUS = 'success' | 'error' | 'info' | 'warning'

const props = defineProps({
  type: {
    type: String as PropType<STATUS>,
    required: true,
  },
  showCloseBtn: {
    type: Boolean,
    default: true,
  },
  show: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

const alertType = toRef(props, 'type')
const alertShowCloseBtn = toRef(props, 'showCloseBtn')
const alertShow = props.show ? ref(props.show) : ref(false)

const alertStyle = computed(() => {
  return alertType.value === 'success'
    ? 'bg-green-200 text-green-900'
    : alertType.value === 'error'
    ? 'bg-red-200 text-red-900'
    : alertType.value === 'warning'
    ? 'bg-yellow-200 text-yellow-900'
    : alertType.value === 'info'
    ? 'bg-blue-200 text-blue-900'
    : ''
})

function closeAlert() {
  alertShow.value = false
}
</script>
