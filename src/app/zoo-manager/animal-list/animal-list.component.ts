import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../../animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent {
  @Input() childAnimalInventory: Animal[];
  @Output() sendTargetAnimalToParent = new EventEmitter();
  homies: boolean = true;
  selectedAnimal: Animal = null;

  userClickedThisAnimal(thisAnimal) {
    this.selectedAnimal = thisAnimal;
    this.sendTargetAnimalToParent.emit(thisAnimal);
  }

}