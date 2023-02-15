<template>
  <div :style="background" class="bg-cover bg-center relative rounded-2xl card flex flex-col">
    <h4 v-if="description" class="text-2xl font-bold text-center pb-8 flex-none">{{ label }}</h4>
    <p class="text-justify desc grow" v-html="description" />
    <span v-if="!description" class="opacity-75 absolute bottom-8 p-4 bg-white w-2/3 font-bold">{{ label }}</span>
    <slot name="action"/>
  </div>
</template>

<script>
export default {
  name: 'CardDefault',
  props: {
    image: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    background () {
      if (this.image) {
        return { backgroundImage: `url(${this.image})` }
      }
      if (this.color) {
        return { backgroundColor: this.backgroundColor }
      }
      return ''
    }
  }
}
</script>
<style scoped>
p.desc >>> ul {
  @apply list-disc;
  @apply pl-4;
}
</style>
