export const CharactersApi = {
    fetchCharacters: async (page: number = 1) => {
        const response = await fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`);
        if (!response.ok) {
            throw new Error('Se ha producido un error al obtener los personajes');
        }
        return response.json();
    }
}