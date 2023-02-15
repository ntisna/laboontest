<template>
  <div :style="background" class="flex-shrink-0 bg-cover bg-center relative rounded-2xl card flex flex-col" :class="{'opacity-80': !button}">
    <div v-if="button" class="flex flex-row justify-between items-center">
      <p class="text-2xl text-white font-bold">{{ label }} </p>
      <a :href="url" class="flex items-center rounded-md bg-secondary-1 py-2 px-8 text-white text-sm font-bold">
        <span class="pr-2">
        {{ button }}
        </span>
        <b-icon-chevron-double-right />
      </a>
    </div>
    <div v-if="!button" class="flex flex-col justify-between items-center">
      <p class="text-2xl text-white">{{ label }} </p>
    </div>
    <div v-if="button" class="pt-2">
      <p class="text-justify desc grow" v-html="description" />
    </div>
    <template v-if="!button">
      <slot name="action"/>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CardTrip',
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
    },
    button: {
      type: String,
      default: ''
    },
    url: {
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
