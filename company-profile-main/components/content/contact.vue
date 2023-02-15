<template>
  <div class="grid auto-rows-min lg:grid-cols-12 max-w-7xl gap-2 w-full py-10">

    <div class="grid auto-rows-min lg:col-start-1 lg:col-end-4 col-start-2 col-end-8 ">
      <h2 class="text-primary-1 font-bold text-4xl text-center lg:text-left">{{ content.title }}</h2>
      <ul ref="area-cards" class="py-8 text-sm text-primary-1 mx-auto">
        <li v-for="(card, key) in content.cards" :key="key" class="pb-2 lg:w-2/3">
          <span class="font-bold">{{ card.label }} :</span>
          <client-only>
            <p v-html="$md.render(card.description)"></p>
          </client-only>
        </li>
      </ul>
      <a :href="content.action.url" class="p-4 text-white rounded-3xl font-bold text-sm w-2/3 mx-auto text-center bg-secondary-1">{{ content.action.label }} </a>
    </div>

    <div ref="area-gmaps" class="lg:col-start-5 col-span-8 flex flex-col h-60 lg:h-auto pt-8 lg:pt-0" style="min-height:432px">
      <client-only>
        <div ref="gmaps" class=" w-full h-full flex items-center">
          <div class="mapouter">
            <div class="gmap_canvas" v-html="content.maps" />
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentContact',
  props: {
    content: {
      type: Object,
      default: () => { return ({}) }
    }
  },
  data () {
    return {
      // maps: '<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://formatjson.org/">format json</a></div><style></style></div>'
      // maps: '<iframe class="gmap_iframe" height="400" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
    }
  },
  methods: {
    buttonHandler () {
      this.$nuxt.$options.router.push(this.content.action.url)
    }
  }
}
</script>
<style scoped>
.mapouter {
  position:relative;
  text-align:right;
  width:100%;
  height:400px;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  width:100%;
  height:400px;
}
.gmap_iframe {
  height:400px!important;
}
</style>
