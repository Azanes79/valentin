import { Component, OnInit } from '@angular/core';
import { Proprietaire } from '../_shared/_models/proprietaire';
import { Propriete } from '../_shared/_models/propriete';
import { ProprietaireService } from '../_shared/_services/proprietaire.service';
import { ProprieteService } from '../_shared/_services/propriete.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public proprietes: Propriete[] = [];
  private proprietaire: Proprietaire;

  constructor(private propieteService: ProprieteService, private proprietaireService: ProprietaireService) {
    this.proprietaire = this.proprietaireService.getProprietaire('Jean HENRY')
    this.proprietes = this.propieteService.getPropriete(this.proprietaire);
  }

  ngOnInit() {
  }

}
