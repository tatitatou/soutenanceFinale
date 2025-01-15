import { createRouter, createWebHistory } from "vue-router";
import TheHomeView from '../views/TheHomeView.vue'; // Assurez-vous que le chemin est correct
import TheCharacterDetails from '../views/TheCharacterDetails.vue'; // Assurez-vous que le chemin est correct

const routes = [
  {
		name: "home",
		path: "/",
		component: TheHomeView
	},
  {
    path: "/character/:id", // La route avec l'ID dynamique
    name: "characterDetails",
    component: TheCharacterDetails, // Assurez-vous que le composant est bien importé
    props: true, // Assurez-vous que l'ID est passé en tant que prop
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
