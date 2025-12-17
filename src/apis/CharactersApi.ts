export const CharactersApi = {
    fetchCharacters: async () => {
        const response = await fetch('https://thesimpsonsapi.com/api/characters');
        if (!response.ok) {
            throw new Error('Se ha producido un error al obtener los personajes');
        }
        return response.json();
    }
}