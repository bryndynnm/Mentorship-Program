import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentee-home',
  templateUrl: './mentee-home.component.html',
  styleUrls: ['./mentee-home.component.scss']
})
export class MenteeHomeComponent implements OnInit {

  mentorshipTypes=[
    { name: 'Open House', value: false },
    { name: 'Twitter', value: false },
    { name: 'Facebook', value: false },
    { name: 'Instagram', value: false },
    { name: 'TikTok', value: false },
    { name: 'Marketing', value: false },
  ];

  constructor() {}

  ngOnInit(): void {

  }

  testFunction(i: any) {
    console.log(this.mentorshipTypes[i]) 
  }

  submitForm() {
    console.log(this.mentorshipTypes);
  }

}
