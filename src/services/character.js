const character = {
  
  async getASingleCharacter(id) {
    const response = await fetch("https://rickandmortyapi.com/api/character/" + id);
    return response.ok ? await response.json() : { error: 'Error in fetching data' };
  }

}

export default character;