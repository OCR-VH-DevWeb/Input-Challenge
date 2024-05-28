import { Component, Input } from '@angular/core';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})

// Utiliser @Input pour recevoir une compétence
export class SkillComponent {
  @Input() skill!: Skill;
}
