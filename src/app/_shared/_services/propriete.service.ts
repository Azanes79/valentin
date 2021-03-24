import { Injectable } from '@angular/core';
import { Proprietaire } from '../_models/proprietaire';
import { Propriete } from '../_models/propriete';
import { ProprietaireService } from './proprietaire.service';

@Injectable({
  providedIn: 'root'
})
export class ProprieteService {

  
  public proprietes: Propriete[] = [
    new Propriete('Propriete A', 'mon adresse', '31000', 'TOULOUSE', 250000),
    new Propriete('Propriete B', 'mon adresse', '31000', 'TOULOUSE', 250000),
    new Propriete('Propriete C', 'mon adresse', '32000', 'VILLE', 350000),
    new Propriete('Propriete D', 'mon adresse', '31000', 'TOULOUSE', 250000),
    new Propriete('Propriete E', 'mon adresse', '31000', 'TOULOUSE', 250000)
  ]

  constructor(proprietaireService: ProprietaireService) {
    const proprietaires: Proprietaire[] = proprietaireService.getProprietaires();
    let i = 0;
    this.proprietes.forEach(_propriete => {
      if(i === 2 ){
        i = 0;
      }
      _propriete.proprietaire = proprietaires[i];
      i++;
    })
  }

  getPropriete(proprietaire: Proprietaire) {
    return this.proprietes.filter(_propriete => _propriete.proprietaire.nom === proprietaire.nom);
  }

}
