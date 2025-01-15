<template>
  <div>
    <!-- Affichage du contenu si les données du personnage sont chargées -->
    <div v-if="character">
      <h1>{{ character.name || 'Nom indisponible' }}</h1>
      <p>{{ $t('species') }}: {{ character.species || 'Espèce indisponible' }}</p>
      <p>{{ $t('status') }}: {{ character.status || 'Statut indisponible' }}</p>
      <p>{{ $t('gender') }}: {{ character.gender || 'Genre indisponible' }}</p>
    </div>

    <!-- Message affiché en cas de chargement -->
    <div v-else>
      <p>Chargement des détails du personnage...</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import character from "../services/character.js";

export default defineComponent({
  name: "CharDetails", // Nommage pour débogage et lisibilité
  data() {
    return {
      character: null, // Détails du personnage
    };
  },
  async created() {
    // Récupération de l'ID à partir des paramètres de la route
    const id = this.$route.params.id;
    if (id) {
      try {
        // Appel au service pour récupérer les détails du personnage
        this.character = await character.getASingleCharacter(id);
        if (!this.character) {
          console.error("Détails du personnage introuvables.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du personnage :", error);
      }
    } else {
      console.error("ID du personnage non fourni.");
    }
  },
});
</script>
