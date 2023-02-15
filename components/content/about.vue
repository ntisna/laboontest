<template>
  <div class="flex overflow-y-scroll flex-row gap-4 items-center px-4 w-full">
      <card-default
        :label="description.label"
        :description="description.desc"
        class="flex-shrink-0 w-80 h-80 p-4"
        :class="[
          description.color ? `bg-${description.color} text-white ` : ''
        ]"
      />
    <card-default
      v-for="(item, key) in cards"
      :key="key"
      :label="item.label"
      :image="item.image ? require(`~/assets/img/content/${item.image}`): ''"
      :description="item.desc"
      class="flex-shrink-0 w-80 h-80"
      :class="[
        item.color ? `bg-${item.color} text-white ` : ''
      ]"
    />
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
      // this.scrollPosition()
    })
  }
}
</script>
