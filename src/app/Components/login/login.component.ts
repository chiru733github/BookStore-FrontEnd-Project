import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  display:boolean=false;
  Login:any;
  SignIn:any;
  LoginForm!:FormGroup;
  SignUpForm!:FormGroup;
  constructor(private user:UserService,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
    this.SignUpForm=this.formBuilder.group({
      fullName:[''],
      email:[''],
      password:[''],
      mobileNumber:['']
    })
  }
  Onlogin()
  {
    let data={
      email:this.LoginForm.value.email,
      password: this.LoginForm.value.password
    }
    this.user.Login(data).subscribe((response:any)=>{
      console.log(response);
    })
  }
  SignUp(){
    let data={
      fullName:this.SignUpForm.value.fullName,
      email:this.SignUpForm.value.email,
      password: this.SignUpForm.value.password,
      mobileNumber:this.SignUpForm.value.mobileNumber
    }
    this.user.register(data).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem("token",response.data);
    })
  }
}
