import type { Episode } from "@/interfaces/Episode";

export interface Character extends Record<string, unknown> {
  id: number;
  age: number;
  birthdate: string;
  gender: string;
  name: string;
  occupation: string;
  portrait_path: string;
  phrases: string[];
  status: string;
}

export interface CharacterDetail extends Character {
  description: string;
  first_appearance_ep_id: number;
  first_appearance_sh_id: number;
  first_appearance_ep: Episode;
  first_appearance_sh: Episode;
}

export interface FirstAppearance {
  id: number;
  airdate: string;
  description: string;
  episode_number: number;
  image_path: string;
  name: string;
  season: number;
  synopsis: string;
}