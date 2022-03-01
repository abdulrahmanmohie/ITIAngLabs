import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  firstReactiveForm: FormGroup
  constructor() {
    this.firstReactiveForm = new FormGroup({
      nameInput: new FormControl('',[Validators.required]),
      emailInput: new FormControl('',[Validators.required]),
      userNameInput: new FormControl('',[Validators.required]),
      passwordInput: new FormControl('',[Validators.required]),
      confirmPasswordInput: new FormControl('',[Validators.required])

    })
   }

  ngOnInit(): void {
  }

  get formControls(){
    console.log(this.firstReactiveForm.controls)
    return this.firstReactiveForm.controls
  }

  handleForm(){
    console.log(this.firstReactiveForm)
  }

}
