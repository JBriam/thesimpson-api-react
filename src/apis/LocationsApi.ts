export const LocationsApi = {
    fetchLocations: async (page : number = 1) => {
        const response = await fetch(`https://thesimpsonsapi.com/api/locations?page=${page}`);
        if (!response.ok) {
            throw new Error('Se ha producido un error al obtener las ubicaciones');
        }
        return response.json();
    }
}