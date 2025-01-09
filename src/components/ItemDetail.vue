<template>
  <h1>{{ title }}</h1>
  <v-row>
    <v-col>
      <v-btn @click="colorStore.changeColor()" :text="$t('changeColor')"></v-btn> <!--si bouton cliqué alors appel de changeColor-->
    </v-col>
    <v-col>
      <v-btn @click="changeLanguage" :text="$t('changeLanguage')"></v-btn>
    </v-col>
  </v-row>
  <v-row jusitfy="center">
    <v-col>
      <v-btn @click="this.$router.push({ name: 'cart' })">Aller au cart</v-btn>
    </v-col>
  </v-row>
  <v-row v-if="character" justify="center">
    <v-col>
      <v-row>
        <p>{{ character.name }}</p>
      </v-row>
      <v-row>
        <p>{{ character.status }}</p>
      </v-row>
      <v-row>
        <p>{{ character.species }}</p>
      </v-row>
      <v-row>
        <p>{{ character.gender }}</p>
      </v-row>
    </v-col>
  </v-row>
  <v-row v-if="character" v-for="(episode, i) in character.episode">
    <v-col cols="auto">
      <span>{{ i }}</span>
    </v-col>
    <v-col cols="6">
      <span>{{ episode }}</span>
    </v-col>
  </v-row>
</template>
<script>
import { defineComponent } from 'vue';
import character from '../services/character.js';
import { useColorStore } from '../stores/useColorStore.js'

export default defineComponent({
  setup(){
    const colorStore = useColorStore()
    return {
      colorStore
    }
  },
  data() {
    return {
      product: 'S600D',
      year: 2021,
      character: null
    }
  },
  methods: {

    changeLanguage() {
      let langue = this.$i18n.locale
      if (langue == 'fr') {
        this.$i18n.locale = 'en'
      }
      else {
        this.$i18n.locale = 'fr'
      }
    }
  },
  computed: {
    title() {
      return this.product + ' ' + this.year
    }
  },
  async created() {
    this.character = await character.getASingleCharacter(2)
    console.log(this.character)
  },
})
</script>