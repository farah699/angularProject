import { Equipe } from "./Equipe";
import { Score } from "./Score";

export class Match{ 
  id!: string; 
  date!: string; 
  heure!: string;
  lieu!: string;
    equipeA: Equipe = new Equipe();
    equipeB: Equipe = new Equipe();
   score:Score = new Score();

}
  
