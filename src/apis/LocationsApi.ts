export const LocationsApi = {
    fetchLocations: async () => {
        const response = await fetch('https://thesimpsonsapi.com/api/locations');
        if (!response.ok) {
            throw new Error('Se ha producido un error al obtener las ubicaciones');
        }
        return response.json();
    }
}