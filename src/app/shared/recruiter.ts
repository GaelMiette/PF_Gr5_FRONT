import { Department } from "./department";

export class Recruiter {
    id = 0;
    login = "";
    logo = "";
    mail = "";
    mdp = "";
    nom = "";
    prenom = "";
    nom_Entreprise = "";
    departement_id = 22;

    version = 0;

    isRecruiter = true;
    listeAnnonces = [];
    departement:Department = new Department();

}
