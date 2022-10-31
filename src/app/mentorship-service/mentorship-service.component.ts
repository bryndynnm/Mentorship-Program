import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-mentorship-service',
  templateUrl: './mentorship-service.component.html',
  styleUrls: ['./mentorship-service.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class MentorshipServiceComponent implements OnInit {

  selectedmType:any;
  constructor() { }

  ngOnInit(): void {
  }



}
