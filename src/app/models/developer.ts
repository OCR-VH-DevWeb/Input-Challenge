import { Skill } from './skill';

export class Developer {
  constructor(
    readonly firstname: string,
    private _lastname: string,
    readonly age: number,
    readonly gender: string,
    readonly bio: string,
    readonly skills: Skill[]
  ) {}

  get lastname(): string {
    return this._lastname;
  }

  set lastname(lastname: string) {
    this._lastname = lastname;
  }
}
// je n'avais pas pensé au attribut readonly et private ni aux méthodes get et set
