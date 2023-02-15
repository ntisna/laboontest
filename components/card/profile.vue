<template>
  <div class="bg-white rounded-xl relative" style="padding-bottom: 75%">
    <div class="absolute bottom-0 p-4 text-sm">
      <p>{{ name }}</p>
      <p>{{ job }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardName',
  props: {
    name: {
      type: String,
      default: ''
    },
    job: {
      type: String,
      default: ''
    }
  }
}
</script>
