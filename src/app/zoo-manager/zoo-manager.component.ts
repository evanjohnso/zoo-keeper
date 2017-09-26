import { Component, OnInit } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'app-zoo-manager',
  templateUrl: './zoo-manager.component.html',
  styleUrls: ['./zoo-manager.component.css']
})
export class ZooManagerComponent {

  totalAnimalInventory: Animal[] = [
    new Animal('Black Bear', 'Smokey', 28,'omnivore', 'Bear Den', 3, 'male', ['beautifully dense green forests'], ['forest fires'] ),
    new Animal('Bald Eagle', 'Uncle Sam', 241, 'omnivore', 'Bird Cage', 1, 'male', ['capitalism', 'manifest destiny', 'freedom', 'guns', 'pharmaceutical companies'], ['access to affordable health care', 'equal rights', 'taxes']),
    new Animal('Yellow Bird', 'Big Bird', 48, 'vegetarian', 'Bird Cage', 2, 'male', ['children', 'singing', 'dancing', 'poetry'], ['when children dont learn']),
    new Animal('Orca', 'Free Willy', 23, 'carnivorous', 'Sea World', 5, 'female', ['Norway', 'fish', 'open water', 'good human caretakers'], ['captivity','military transport planes', 'pneumonia']),
    new Animal('Alien', 'E.T.', 35, 'vegetarian', 'Space', 1, 'female', ['Reeces Pieces', 'hoodies', 'plants', 'phoning home'], ['alienation'])
  ];

  focusAnimal: Animal = null;
  managerAnimalBoolean: boolean = false;

  changeNewAnimalBoolean() {
    this.managerAnimalBoolean = true;
  }

  animalSelected(selectedAnimal: Animal) {
    this.focusAnimal = selectedAnimal;
  }
  doneEditing() {
    this.focusAnimal = null;
  }
  addNewAnimal(animalToAdd) {
    this.managerAnimalBoolean = false;
    this.totalAnimalInventory.push(animalToAdd);
  }
}
