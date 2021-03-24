import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Card } from '../_shared/_models/card';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  public title: string;
  public formGroup: FormGroup;

  constructor( 
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<FormulaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.title = this.data.title;
    }

  ngOnInit() {
    this.createForm();
    if(this.data.card) {
      this.formGroup.patchValue(this.data.card);
      // this.formGroup.get('name').setValue(this.data.card.name);
    }
  }

  createForm() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      age: [0, [Validators.required, Validators.min(13)]],
    });
  }

  sendData() {
    if(this.formGroup.valid) {
      this.dialogRef.close(new Card(this.formGroup.get('name').value, this.formGroup.get('age').value))
    }
  }

  close() {
    this.dialogRef.close();
  }

}
