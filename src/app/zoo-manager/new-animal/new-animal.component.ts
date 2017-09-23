import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from './../../animal.model';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent {
  @Output() sendNewAnimalToZooManager = new EventEmitter();

  submitForm(species: string,
              name: string,
              birthday: string,
              diet: string,
              housingUnit: string,
              caretakers: number,
              sex: string,
              likes: string,
              dislikes: string
            ) {
  let likesArray = likes.split(',');
  let dislikesArray = dislikes.split(',');
  let bdayFormat = new Date(birthday);
  let newAnimal = new Animal(species, name, bdayFormat, diet, housingUnit, caretakers, sex, likesArray, dislikesArray);

  this.sendNewAnimalToZooManager.emit(newAnimal);
  }
}
