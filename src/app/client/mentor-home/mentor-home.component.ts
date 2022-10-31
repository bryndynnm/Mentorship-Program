import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-home',
  templateUrl: './mentor-home.component.html',
  styleUrls: ['./mentor-home.component.scss']
})
export class MentorHomeComponent implements OnInit {

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
