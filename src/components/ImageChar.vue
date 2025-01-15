<template>
  <div>
    <div v-if="character">
      <v-img :src="character.image" alt="Character Image" />
    </div>
    <div v-else>
      <p>Chargement de l'image du personnage...</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import character from "../services/character.js"; // Service pour récupérer les données

export default defineComponent({
  name: "ImageChar",
  data() {
    return {
      character: null, // Détails du personnage
    };
  },
  async created() {
    // Récupérer l'ID du personnage à partir des paramètres de la route
    const id = this.$route.params.id;
    if (id) {
      try {
        // Récupérer le personnage par son ID
        this.character = await character.getASingleCharacter(id);
      } catch (error) {
        console.error("Erreur lors du chargement du personnage :", error);
      }
    } else {
      console.error("Aucun ID de personnage trouvé dans les paramètres de la route.");
    }
  },
});
</script>
