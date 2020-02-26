import { User } from './user.model';
import { Trajet } from './trajet.model';
export class Reservation{
    public id:number;
    public userId:string;
    public trajetId:string;
    public place_reserve :number;
}