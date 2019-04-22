import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(`${this.uri}/characters`);
  }

  getCharacterById(id) {
    return this.http.get(`${this.uri}/characters/${id}`);
  }

  addCharacter(name, gender) {
    const character = {
      name: name,
      gender: gender
    };
    return this.http.post(`${this.uri}/characters/add`, character);
  }

  updateCharacter(id, name, gender) {
    const character = {
      name: name,
      gender: gender
    };
    // referring to the route in serverjs to connect in mongodb
    return this.http.post(`${this.uri}/characters/update/${id}`, character);
  }

  deleteCharacter(id) {
    return this.http.get(`${this.uri}/characters/delete/${id}`);
  }

}
