import Vue from 'vue'
// docs: https://bootstrap-vue.org/docs/icons
// icons cheat-sheet: https://icons.getbootstrap.com/#icons
import {
  BootstrapVue,
  BIcon,
  BIconBarChart,
  BIconBoxArrowInRight,
  BIconBriefcase,
  BIconCalendarWeek,
  BIconChatSquareText,
  BIconChevronDown,
  BIconChevronLeft,
  BIconChevronRight,
  BIconChevronDoubleRight,
  BIconGeoAlt,
  BIconList,
  BIconPlayCircle,
  BIconPlusCircle,
  BIconCloudArrowUp,

  // social-media icons
  BIconFacebook,
  BIconInstagram,
  BIconWhatsapp
} from 'bootstrap-vue'

Vue.use(BootstrapVue)
// primary icon component
Vue.component('BIcon', BIcon)

// semantic icons
Vue.component('BIconBarChart', BIconBarChart)
Vue.component('BIconBoxArrowInRight', BIconBoxArrowInRight)
Vue.component('BIconBriefcase', BIconBriefcase)
Vue.component('BIconCalendarWeek', BIconCalendarWeek)
Vue.component('BIconChatSquareText', BIconChatSquareText)
Vue.component('BIconChevronDown', BIconChevronDown)
Vue.component('BIconChevronLeft', BIconChevronLeft)
Vue.component('BIconChevronRight', BIconChevronRight)
Vue.component('BIconChevronDoubleRight', BIconChevronDoubleRight)
Vue.component('BIconGeoAlt', BIconGeoAlt)
Vue.component('BIconList', BIconList)
Vue.component('BIconPlayCircle', BIconPlayCircle)
Vue.component('BIconPlusCircle', BIconPlusCircle)
Vue.component('BIconCloudArrowUp', BIconCloudArrowUp)

// social-media icons
Vue.component('BIconFacebook', BIconFacebook)
Vue.component('BIconInstagram', BIconInstagram)
Vue.component('BIconWhatsapp', BIconWhatsapp)
