import { Likes } from "src/app/likes";
import { Location } from "src/app/location";

export class Usuario {
    id: string;
    name: string;
    email: string;
    likes: Likes[];
    location: Location[];
}