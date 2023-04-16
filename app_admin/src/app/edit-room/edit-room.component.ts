import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})

export class EditRoomComponent {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private roomsService: RoomsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      _id: [''],
      __v: [''],
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      rate: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.roomsService.getRoom(this.activatedRoute.snapshot.params['roomCode']).subscribe({
      next: room => this.editForm.setValue(room),
      error: e => console.log(e)
    });
  }

  updateRoom() {
    if (this.editForm.valid) {
      this.roomsService.updateRoom(this.activatedRoute.snapshot.params['roomCode'], this.editForm.value)
        .subscribe({
          next: () => this.router.navigate(['/rooms']),
          error: e => console.log(e)
        });
    }
  }
  get f() { return this.editForm.controls; }

}
