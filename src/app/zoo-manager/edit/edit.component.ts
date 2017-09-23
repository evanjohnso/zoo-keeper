import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../../animal.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() editThisAnimal;
  @Output() doneEditingThisAnimal = new EventEmitter();

  doneButtonWasClicked() {
    console.log('show us this animal in the child');
    console.log(this.editThisAnimal);
    this.doneEditingThisAnimal.emit();
  }

  constructor() { }


}
