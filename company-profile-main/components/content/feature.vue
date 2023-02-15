<template>
  <div class="grid auto-rows-min w-full max-w-7xl py-10">
    <div ref="area-title">
      <div class="flex items-center p-4">
        <h2 class="text-primary-1 font-bold text-4xl text-center lg:text-left w-full">{{ content.title }}</h2>
      </div>
      <div class="lg:col-start-5 lg:col-end-12">
        <p class="text-primary-1 text-justify">
          {{ content.description }}
        </p>
      </div>
    </div>

    <div ref="area-cards" class="w-full lg:overflow-x-scroll px-4 pb-4" >
      <div class="grid gap-4 w-area-card" :class="`lg:grid-cols-${content.cards.length}`">
        <client-only>
          <card-trip
            v-for="(item, key) in content.cards"
            :key="key"
            :description="$md.render(item.desc)"
            :label="item.label"
            :button="item.button"
            :url="item.url"
            class="p-8"
            :class="[
              item.color ? `bg-${item.color} text-white` : ''
            ]"
          >
            <template v-slot:action>
              <div class="w-full flex items-center justify-center pt-4 mt-auto grow">
                <div :class="[ item.button ? '' : `bg-transparent border border-gray-1 rounded-full w-full font-medium py-4 capitalize text-center text-white`]">
                  {{ item.action }}
                </div>
              </div>
            </template>
          </card-trip>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentFeature',
  props: {
    content: {
      type: [Object, String],
      default: () => { return {} }
    }
  }
}
</script>

<style lang="postcss" scoped>
@screen lg {
  .w-area-card {
    width: 120%;
  }
}
</style>
