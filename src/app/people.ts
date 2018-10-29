export class People {
    id: number;
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: Array<{id: number, text: string}>;
    species: Array<{id: number, text: string}>;
    starships: Array<{id: number, text: string}>;
    vehicles: Array<{id: number, text: string}>;
    url: string;
    created: string;
    edited: string;

}