import { Department } from "./department";

export class Candidate {
    id = 0;
    nom = "";
    prenom = "";
    profession = "";
    anneesXP = 0;
    age = 0;
    departement_id = 22;
    mail = ""; 
    mdp = ""; 
    isRecruiter = false;
    version = 0;
    departement:Department = new Department()
    listeAnnonces = [];
}
