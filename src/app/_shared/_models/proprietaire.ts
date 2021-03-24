import { stringify } from "@angular/compiler/src/util";

export class Proprietaire {

    nom: string;
    solde: number;

    constructor(nom: string, solde: number) {
        this.nom = nom;
        this.solde = solde;
    }
}
