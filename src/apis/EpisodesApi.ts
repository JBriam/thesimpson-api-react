export const EpisodesApi = {
    fetchEpisodes: async () => {
        const response = await fetch('https://thesimpsonsapi.com/api/episodes');
        if (!response.ok) {
            throw new Error('Se ha producido un error al obtener los episodios');
        }
        return response.json();
    }
}