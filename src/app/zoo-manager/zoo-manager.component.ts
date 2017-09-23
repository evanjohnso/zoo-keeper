import { Component, OnInit } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'app-zoo-manager',
  templateUrl: './zoo-manager.component.html',
  styleUrls: ['./zoo-manager.component.css']
})
export class ZooManagerComponent {

  totalAnimalInventory: Animal[] = [
    new Animal('Black Bear', 'Smokey', new Date(1988, 3, 12),'omnivore', 'Bear Den', 3, 'male', ['beautifully dense green forests'], ['forest fires'] ),
    new Animal('Bald Eagle', 'Uncle Sam', new Date(1776, 7, 4), 'omnivore', 'Bird Cage', 1, 'male', ['capitalism, manifest destiny, freedom, guns, pharmaceutical companies'], ['access to affordable health care, equal rights, taxes']),
    new Animal('Yellow Bird', 'Big Bird', new Date(1969, 3, 20), 'vegetarian', 'Bird Cage', 2, 'male', ['children, singing, dancing, poetry'], ['when children dont learn']),
    new Animal('Orca', 'Free Willy', new Date(1993, 7, 16), 'carnivorous', 'Sea World', 5, 'female', ['Norway, fish, open water, good human caretakers'], ['captivity, military transport planes, pneumonia']),
    new Animal('Alien', 'E.T.', new Date(1982, 5, 26), 'vegetarian', 'Space', 1, 'female', ['Reeces Pieces, hoodies, plants, phoning home'], ['alienation'])
  ];

  focusAnimal: Animal = null;

  animalSelected(selectedAnimal: Animal) {
    this.focusAnimal = selectedAnimal;
    alert(this.focusAnimal.name);
  }


}
