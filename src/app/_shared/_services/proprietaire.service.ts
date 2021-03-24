import { Injectable } from '@angular/core';
import { Proprietaire } from '../_models/proprietaire';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  public proprietaires: Proprietaire[] = [
    new Proprietaire('Jean HENRY', 1000000),
    new Proprietaire('Jeanne HENRY',1200000)
  ]

  constructor() {

  }

  getProprietaires() {
    return this.proprietaires;
  }

  getProprietaire(nom: string) {
    return this.proprietaires.filter(_proprietaire => _proprietaire.nom === nom)[0];
  }
}
