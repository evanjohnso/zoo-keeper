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

  userClickedThisAnimal(thisAnimal) {
    this.sendTargetAnimalToParent.emit(thisAnimal);
  }

}
