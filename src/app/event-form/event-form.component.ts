import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  eventForm = this.fb.group({
    trainingType: ['', Validators.required],
    description: [''],
    image: [''],
    date: [''],
    time: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      postalCode: ['']
    }),
    numberOfParticipants: ['']
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.eventForm.value);
  }
}
