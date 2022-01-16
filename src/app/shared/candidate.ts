import { Department } from "./department";

export class Candidate {
    id = 0;
    nom = "";
    prenom = "";
    profession = "";
    anneesxp = 0;
    age = 0;
    departement_id = 22;
    mail = ""; 
    mdp = ""; 
    isRecruiter = false;
    listeAnnonces=[];
    departement=new Department();
    version = 0;
}
