import { Proprietaire } from "./proprietaire";

export class Propriete {
    nom: string;
    adresse: string;
    cp: string;
    ville: string;
    prix: number;
    proprietaire: Proprietaire;

    constructor(nom: string, adresse: string, cp: string, ville: string, prix: number, proprietaire?: Proprietaire) {
        this.nom = nom;
        this.adresse = adresse;
        this.cp = cp;
        this.ville = ville;
        this.prix = prix;
        this.proprietaire = proprietaire;
    }
}
