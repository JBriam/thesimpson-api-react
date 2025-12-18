export interface Episode extends Record<string, unknown> {
  id: number;
  airdate: string;
  episode_number: number;
  image_path: string;
  name: string;
  season: number;
  synopsis: string;
  description: string;
}