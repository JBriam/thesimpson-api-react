export interface Location extends Record<string, unknown> {
  id: number;
  name: string;
  image_path: string;
  town: string;
  use: string;
}