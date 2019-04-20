import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CharacterService } from '../../character.service';


@Component({
  selector: 'app-createcharacter',
  templateUrl: './createcharacter.component.html',
  styleUrls: ['./createcharacter.component.css']
})
export class CreatecharacterComponent implements OnInit {

  createForm: FormGroup;

  constructor(private characterService: CharacterService, private fb: FormBuilder, private router: Router ) { 
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      gender: ''
  });
  }

  addCharacter(name, gender) {
    this.characterService.addCharacter(name, gender).subscribe(() =>{
      this.router.navigate(['/characters']);
    });
  }


  ngOnInit() {
  }

}
