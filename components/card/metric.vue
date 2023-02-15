<template>
  <div class="bg-white rounded-lg p-4 shadow-sm w-full">
    <div class="font-bold flex flex-col justify-center text-center text-accent-1">
      <span class="text-3xl">{{ value }}</span>
      <p class="text-sm uppercase">{{ label }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMetric',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
