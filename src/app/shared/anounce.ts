import { Department } from "./department";
import { Recruiter } from "./recruiter";

export class Anounce {
    id=0;
    categorie="";
    date="";
    description="";
    salaire=0;
    tele_travail=false;
    titre = "";
    type_Contrat = "";
    version = 0;
    departement_id = 0;
    recruteur_id = 0;
    listeCandidats = [];
    recruteur : Recruiter = new Recruiter();
    departement : Department = new Department();

}
