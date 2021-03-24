import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormulaireComponent } from '../formulaire/formulaire.component';
import { Card } from '../_shared/_models/card';
import { Proprietaire } from '../_shared/_models/proprietaire';
import { Propriete } from '../_shared/_models/propriete';
import { ProprietaireService } from '../_shared/_services/proprietaire.service';
import { ProprieteService } from '../_shared/_services/propriete.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cards: Card[] = [];
  public proprietes: Propriete[] = [];
  private proprietaire: Proprietaire

  constructor(private propieteService: ProprieteService, 
    private proprietaireService: ProprietaireService,
    public dialog: MatDialog) {

    this.proprietaire = this.proprietaireService.getProprietaire('Jean HENRY');
    this.proprietes = this.propieteService.getPropriete(this.proprietaire);
    console.log(this.proprietes);
    console.table(this.proprietes);
  }

  ngOnInit() {
  }

  addCard(card: Card) {
    this.cards.push(card);
  }

  openDialog() {
    const dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.width = '40%';
    dialogConfig.data = {title: 'Veuillez remplir le formulaire'}
    const dialogRef = this.dialog.open(FormulaireComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.addCard(result)
      }
    });
  }

  editData(i: number, card: Card) {
    console.log(i, card)
    const dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.width = '40%';
    dialogConfig.data = {title: 'Veuillez remplir le formulaire', card: card}
    const dialogRef = this.dialog.open(FormulaireComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result) {
        console.log(result);
        this.cards[i] = result;
        console.log(this.cards);
      }
    });
  }

}
