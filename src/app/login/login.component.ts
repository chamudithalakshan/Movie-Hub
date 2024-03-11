import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  tempEmail: string = "chamuditha@gmail.com";
  tempPassword: string = "chamu1234";
  loginForm: FormGroup;



isFormSubmitted:boolean=false;
  constructor(private router: Router) {
    this.loginForm=new FormGroup({
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.minLength(6)]),
    })
  }

  onSubmit() {
    const isFormValid=this.loginForm.valid;
    this.isFormSubmitted=true

    if (isFormValid && this.compareValues()){
      this.router.navigate(['/admin']);
    }
  }

  compareValues():boolean{
    const enteredEmail = this.loginForm?.get('email')?.value;
       const enteredPassword = this.loginForm?.get('password')?.value;
    if (enteredEmail === this.tempEmail && enteredPassword === this.tempPassword){
      return true
    }
    return false;
  }
}
