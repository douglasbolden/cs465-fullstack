import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})

export class AddRoomComponent {

  addForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private roomsService: RoomsService
  ) {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      rate: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  addRoom() {
    if (this.addForm.valid) {
      this.roomsService.addRoom(this.addForm.value)
        .subscribe({
          next: () => this.router.navigate(['/rooms']),
          error: e => console.log(e)
        });
    }
  }

  get f() {
    return this.addForm.controls;
  }

}
