import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../../animal.model';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent {
  @Input() addNewAnimal = null;
  @Output() sendNewAnimalToZooManager = new EventEmitter();

  submitForm(species: string,
              name: string,
              age: number,
              diet: string,
              housingUnit: string,
              caretakers: number,
              sex: string,
              likes: string,
              dislikes: string
            ) {
  let likesArray = likes.split(',');
  let dislikesArray = dislikes.split(',');
  let newAnimal = new Animal(species, name, age, diet, housingUnit, caretakers, sex, likesArray, dislikesArray);

  this.sendNewAnimalToZooManager.emit(newAnimal);
  this.addNewAnimal = null;
  }
}
