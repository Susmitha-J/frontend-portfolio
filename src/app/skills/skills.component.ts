import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills : any;
  ngOnInit() {


   this.skills = [
      { id: '1', skill: 'Spring Boot', progress: '85%' },
      { id: '2', skill: 'Angular', progress: '85%' },
      { id: '3', skill: 'SQL', progress: '80%' },
      { id: '4', skill: 'Java', progress: '75%' },
      { id: '5', skill: 'AWS', progress: '75%' },
      { id: '6', skill: 'Kafka', progress: '70%' }
    ];
    
  }
}
