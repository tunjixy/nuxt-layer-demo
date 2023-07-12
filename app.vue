<template>
  <div class="py-16">
    <div class="container">
      <h1 class="text-4xl font-bold uppercase">Ui Components</h1>
      <UiAlert type="error" :show="true" class="mt-3">
        This is an alert
      </UiAlert>
      <UiButton primary rounded raised class="mt-3"> Primary </UiButton>
      <UiButton outline-primary rounded raised class="mt-3">
        Outline Primary
      </UiButton>
      <UiToggleSwitch v-model="isToggled" class="mt-3" />
    </div>
  </div>
</template>

<script setup lang="ts">
const isToggled = ref(false)
</script>
