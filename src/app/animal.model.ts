export class Animal {
  constructor(public species: string,
              public name: string,
              public age: number,
              public diet: string,
              public housingUnit: string,
              public caretakers: number,
              public sex: string,
              public likes: string[],
              public dislikes: string[]
            ) {}
}
