import { createApp } from 'vue'
// import i18n from './localization/i18n.js'
import { createI18n } from "vue-i18n";
import router from './router/router.js'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'
const pinia = createPinia()
const vuetify = createVuetify({
  components,
  directives,
})

const i18n = createI18n({
  locale: 'fr',
  messages: {
    en: {
        changeColor: 'change color',
        changeLanguage: "change language"
    },
    fr: {
        changeColor: 'Changer de couleur',
        changeLanguage: "changer de langue"
    }
  }
})



createApp(App)
  .use(vuetify)
  .use(i18n)
  .use(router)
  .use(pinia)
  .mount('#app')

