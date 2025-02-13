export interface CardI {
  api: string;
}

export interface EventI {
  adresse: string;
  description_evt: string;
  date: string;
  lieu: string;
  nom: string;
  id: number;
  id_manif: number;
  media_url?: string;
  types_libelles: string;
  themes_libelles: string;
  code_postal: number;
  url_site: string;
  id_agenda_in: number;
  heure_debut: number;
  emetteur: string;
  lien_agenda: string;
  longitude: number;
  latitude: number;
  heure_fin: number;
}
