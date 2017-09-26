import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "filterAgePipeName",
  pure: false
})

export class filterAgePipe implements PipeTransform {

  transform(input: Animal[], ageFilter){
    if (ageFilter==="youngAnimals") {
      return input.filter( (animal) => {
        return animal.age < 30;
      })
    } else if (ageFilter ==="matureAnimals") {
      return input.filter( (animal) => {
        return animal.age >= 30;
      })
    } else {
      return input;
    }
  }
}
