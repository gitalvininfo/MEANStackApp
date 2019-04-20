import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Character } from '../../character.model';
import { CharacterService } from '../../character.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[];
  displayedColumns = ['name', 'gender', 'actions'];

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.characterService
      .getCharacters()
      .subscribe((data: Character[]) => {
        this.characters = data;
        console.log('Data requested...');
        console.log(this.characters);
      });
  }

  editCharacter(id) {
    this.router.navigate([`/editcharacter/${id}`]);
  }

  deleteCharacter(id) {
    this.characterService.deleteCharacter(id).subscribe(() => {
      this.fetchCharacters();
    });
  }

}
