<template>
    <TheAppBar :color="colorStore.color" />
  <v-main>
    <v-row style="height: 15vh">

    </v-row>
    <v-row>
      <v-col cols="3" class="text-center">
        <ImageChar />
      </v-col>
      <v-col cols="9" class="text-center">
        <CharDetails  />
      </v-col>
    </v-row>
  </v-main>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import TheAppBar from '../components/TheAppBar.vue'
  import character from "../services/character.js"; // Service pour récupérer les données
  import ImageChar from '../components/ImageChar.vue';
  import CharDetails from '../components/CharDetails.vue';
  import { useColorStore } from '../stores/useColorStore.js'
  
  export default defineComponent({
    name: 'TheCharacterDetails',
    components: {
      TheAppBar,
      ImageChar,
      CharDetails
    },
    setup() {
    const colorStore = useColorStore()
    return {
      colorStore
    }
  },
  data() {
    return {
      colorValue: 'red'
    }
  },
  methods: {
    setColor(c) {
      this.colorValue = c
    }
  }
})

  </script>
  