<template>
  <section
    :id="title"
    class="bg-left lg:bg-center bg-cover flex items-center justify-center p-4"
    :style="background"
  >
    <slot />
  </section>
</template>

<script>
export default {
  name: 'SectionDefault',
  props: {
    title: {
      type: String,
      default: ''
    },
    backgroundSrc: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    background () {
      if (this.backgroundSrc) {
        return { backgroundImage: `url(${this.backgroundSrc})` }
      }
      if (this.backgroundColor) {
        return { backgroundColor: this.backgroundColor }
      }
      return ''
    }
  }
}
</script>
