import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { CharacterService } from '../../character.service';
import { Character } from '../../character.model';

@Component({
  selector: 'app-editcharacter',
  templateUrl: './editcharacter.component.html',
  styleUrls: ['./editcharacter.component.css']
})
export class EditcharacterComponent implements OnInit {

  id: String;
  character: any = {};
  updateForm: FormGroup;

  constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      gender: ''
  });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.characterService.getCharacterById(this.id).subscribe(res => {
        this.character = res;
        this.updateForm.get('name').setValue(this.character.name);
        this.updateForm.get('gender').setValue(this.character.gender);
      });
    });
  }

  updateCharacter(name, gender) {
    this.characterService.updateCharacter(this.id, name, gender).subscribe(() => {
      this.snackBar.open('Character updated successfully', 'OK', {
        duration: 3000
      });
      this.router.navigate(['/characters']);
    });
  }


}

