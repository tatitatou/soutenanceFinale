import { createApp } from 'vue'
// import i18n from './localization/i18n.js'
import { createI18n } from "vue-i18n";
import router from './router/router.js'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import 'vuetify/styles';
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
        changeLanguage: "change language",
        characters: "Characters",
        navBar: "Navigation bar",
        showCharacter: "Display the character",
        idChar: "character id",
        allCharacters: "Characters list",
        species: "species",
        gender: "gender",
        name: "name",
        status: "status"
    },
    fr: {
        changeColor: 'Changer de couleur',
        changeLanguage: "changer de langue",
        characters: "Personnages",
        navBar: "Barre de navigation",
        showCharacter: "Afficher le personnage",
        idChar: "id du personnage",
        allCharacters: "Liste des personnages",
        species: "espèces",
        gender: "genre",
        name: "nom",
        status: "statut"
    }
  }
})



createApp(App)
  .use(vuetify)
  .use(i18n)
  .use(router)
  .use(pinia)
  .mount('#app')

