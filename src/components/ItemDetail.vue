<template>
  <!-- Affichage du titre traduit -->
  <h1>{{ $t('characters') }}</h1>

  <!-- Boutons pour changer la couleur et la langue -->
  <v-row>
    <v-col>
      <!-- Bouton pour changer la couleur en utilisant une méthode du store -->
      <v-btn @click="colorStore.changeColor()">{{ $t('changeColor') }}</v-btn>
    </v-col>
    <v-col>
      <!-- Bouton pour changer la langue (appelle la méthode changeLanguage) -->
      <v-btn @click="changeLanguage">{{ $t('changeLanguage') }}</v-btn>
    </v-col>
  </v-row>

  <!-- Saisie de l'ID du personnage -->
  <v-row justify="center">
    <v-col cols="7">
      <h3>{{ $t('idChar') }}</h3>
      <v-text-field v-model.number="number" type="number" label="Enter Character ID" outlined></v-text-field>
    </v-col>
    <v-col>
      <!-- Bouton pour rediriger vers la page de détails -->
      <v-btn @click="goToCharacter(number)" color="primary">{{ $t('showCharacter') }}</v-btn>
    </v-col>
  </v-row>


  <!-- Liste de tous les personnages -->
  <v-row>
    <v-col>
      <h2>{{ $t('allCharacters') }}</h2>
      <v-row v-for="char in characters" :key="char.id">
        <v-col cols="auto">
          <span>{{ char.id }}</span>
        </v-col>
        <v-col cols="6">
          <span>{{ char.name }}</span>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from "vue"; // Import de la fonction de définition de composants Vue
import character from "../services/character.js"; // Import du service pour récupérer des données sur les personnages
import { useColorStore } from "../stores/useColorStore.js"; // Import du store de gestion des couleurs

export default defineComponent({
  setup() {
    const colorStore = useColorStore(); // Initialisation du store des couleurs
    return {
      colorStore, // Ajout au contexte du composant
    };
  },
  data() {
    return {
      character: null, // Détails d'un personnage
      number: null, // ID saisi pour rechercher un personnage spécifique
      characters: [], // Liste de tous les personnages
    };
  },
  methods: {
    // Méthode pour changer la langue de l'application
    changeLanguage() {
      let langue = this.$i18n.locale; // Récupération de la langue actuelle
      this.$i18n.locale = langue === "fr" ? "en" : "fr"; // Bascule entre français et anglais
    },
    // Redirection vers les détails d'un personnage
    goToCharacter(id) {
      this.$router.push({ name: "characterDetails", params: { id } });
    },
    // Méthode pour récupérer la liste de tous les personnages
    async fetchAllCharacters() {
      this.characters = await character.getAllCharacters(); // Récupère tous les personnages
  },
  },
  async created() {
    // Récupération d'un seul personnage
    this.character = await character.getASingleCharacter(8);
    console.log(this.character);

    // Récupération de tous les personnages
    await this.fetchAllCharacters();
  },
});
</script>
