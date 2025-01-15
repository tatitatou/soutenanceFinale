const character = {
  
  async getASingleCharacter(id) {
    const response = await fetch("https://rickandmortyapi.com/api/character/" + id);
    return response.ok ? await response.json() : { error: 'Error in fetching data' };
  },

  async getAllCharacters() {
    let allCharacters = [];
    let nextUrl = "https://rickandmortyapi.com/api/character";

    while (nextUrl) {
      const response = await fetch(nextUrl);
      if (response.ok) {
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.results]; // Ajoute les personnages de la page actuelle
        nextUrl = data.info.next; // Passe à la page suivante
      } else {
        console.error("Erreur dans la récupération des personnages.");
        nextUrl = null; // Arrête la boucle en cas d'erreur
      }
    }

    return allCharacters;
  },
}

export default character;