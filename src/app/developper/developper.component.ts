import { Component } from '@angular/core';
import { Developer } from '../models/developer';
import { Skill } from '../models/skill';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-developper',
  standalone: true,
  imports: [FormsModule, CommonModule, SkillComponent],
  templateUrl: './developper.component.html',
  styleUrl: './developper.component.css',
})
export class DevelopperComponent {
  developper: Developer = new Developer(
    'Doe',
    'John',
    30,
    'Male',
    'Front-end developer with 7 years of experience',
    [
      new Skill(
        'Angular',
        'https://miro.medium.com/v2/resize:fit:1400/1*Klh1l7wkoG6PDPb9A5oCHQ.png',
        'https://angular.dev/'
      ),
      new Skill(
        'React',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png',
        'https://legacy.reactjs.org/docs/getting-started.html'
      ),
    ]
  );
}
