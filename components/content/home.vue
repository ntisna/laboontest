<template>
  <div class="w-full max-w-7xl lg:px-8 pt-12 lg:pt-8 relative">
    <div class="flex lg:flex-row flex-col items-center justify-start ">
      <div v-if="content" class="w-full lg:w-1/2 flex flex-col-reverse lg:flex-col items-start justify-start lg:pr-8">
        <div class="grid gap-6 lg:grid-cols-3 lg:grid-row-1 grid-cols-1 grid-row-3 pt-10 w-full">
          <card-metric v-for="(card, key) in content.metrics" :key="key" :value="card.value" :label="card.label" />
        </div>
        <div>
          <div class="filter lg:text-left text-center drop-shadow-md text-white leading-5 mt-8" v-html="$md.render(content.description)" />
          <a :href="content.cta.url" class="py-4 flex justify-center items-center h-14 bg-secondary-1 my-4 lg:w-4/12 w-full rounded-2xl font-bold">
            <span class="text-white capitalize text-sm">
              {{ cta.label }}
            </span>
          </a>
        </div>
      </div>
    </div>
    <!-- <div class="absolute w-full bottom-0">
      <div class="pt-10 flex justify-center w-full">
        <b-icon-chevron-down class="text-5xl text-white" />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ContentHome',
  props: {
    content: {
      type: [Object, String],
      default: () => { return {} }
    }
  },
  computed: {
    cta () {
      if (!this.content) { return }
      const { cta } = this.content
      if (cta === {}) { return }
      return cta
    }
  }
}
</script>
