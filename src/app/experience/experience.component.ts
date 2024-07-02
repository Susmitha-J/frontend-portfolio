import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  workexp : any;

  ngOnInit() {
   this.workexp = [
      {
        company: 'Development Bank Of Singapore',
        role: 'Application Developer (Full stack), Analyst',
        startDate: 'Aug 2022',
        endDate: 'Jul 2023',
        duties: [
          'Worked as a full stack developer',
          'Responsible for handling the UI in React and Managing the API calls in Python Flask.'
        ]
      },
      {
        company: 'Development Bank Of Singapore',
        role: 'Application Developer(Full Stack), Senior Officer',
        startDate: 'Jul 2021',
        endDate: 'Aug 2022',
        duties: [
          'Working as a full stack developer',
          'Responsible for handling the UI in React and Managing the API calls in Python Flask.'
        ]
      }
    ]
  }

}
