<template>
  <div class="flex flex-col px-1" :class="[ rowReverse ? 'lg:flex-row-reverse': 'lg:flex-row' ]">
    <div ref="description" class="lg:absolute z-10 lg:w-1/3" :class="[ rowReverse ? 'lg:left-2': 'lg:right-2']" >
      <card-default
          :label="description.label"
          :description="description.desc"
          class=" my-2 w-full p-8 lg:h-80"
          :class="[
            description.color ? `bg-${description.color} text-white ` : ''
          ]"
        />
    </div>
    <div class="flex lg:overflow-x-scroll lg:w-2/3 items-center">
      <div class="w-full flex">
        <div
          ref="cards"
          class="flex flex-col lg:flex-row w-full lg:w-auto items-center py-1"
        >
            <card-default
              v-for="(item, key) in cards"
              :key="key"
              :label="item.label"
              :image="item.image ? require(`~/assets/img/content/${item.image}`): ''"
              :description="item.desc"
              class=" my-2 lg:mx-4 w-full lg:w-80 h-48 lg:h-80"
              :class="[
                item.color ? `bg-${item.color} text-white ` : ''
              ]"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentAbout',
  props: {
    cards: {
      type: Array,
      default: () => { return [] }
    },
    description: {
      type: Object,
      default: () => { return {} }
    },
    rowReverse: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    scrollPosition () {
      const container = this.$refs.cards
      // const maxLeft = container.scrollWidth
      // console.log(container)
      console.log('scroll')
      // container.scrollLeft = -1000
      // container.$el
      container.scrollTo({ left: 100, behavior: 'smooth' })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scrollPosition()
    })
  }
}
</script>
