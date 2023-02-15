<template>
  <div class="w-full text-white" >
    <div class="bg-white rounded-2xl shadow-md p-1 relative" style="padding-bottom: 75%">
      <span class="absolute rounded-full bg-accent-1 text-sm text-white px-2 py-1">{{ number }} </span>
      <slot name="icon"/>
    </div>
    <h5 class="text-center w-full pt-4">{{ label }}</h5>
  </div>
</template>

<script>
export default {
  name: 'CardNumbered',
  props: {
    number: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
