import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../Services/address/address.service';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  isdisable:boolean=true;
  disableAddress:boolean=true;
  ListOfAddress=[
    {addressId:0,address:'',fullName:'',mobileNumber:'',city:'',state:'',type:'',UserId:0,isDeleted:false}
  ]
  userDetail={
    fullName:'',
    email:'',
    password:'',
    mobileNumber:''
  };
  constructor(private address:AddressService,private user:UserService,private builder:FormBuilder){}
  ngOnInit(): void {
    this.UserDetails();
    this.GetAllAddress();
  }
  GetAllAddress(){
    this.address.getAllAddress().subscribe((response:any)=>{
      console.log(response);
      this.ListOfAddress=response.data;
    })
  }
  UserDetails(){
    this.user.GetById().subscribe((result:any)=>{
      console.log(result);
      this.userDetail=result.data;
    })
  }
  updateUser(){
    let data ={
      fullName:this.userDetail.fullName,
      email:this.userDetail.email,
      password:this.userDetail.password,
      mobileNumber:this.userDetail.mobileNumber
    }
    return this,this.user.UpdateProfile(data).subscribe((response:any)=>{
      console.log(response);
      this.UserDetails();
    })
  }
  updateAddress(data:any){
    let reqdata={
      fullName:data.fullName,
      mobileNumber:data.mobileNumber,
      address:data.address,
      city:data.city,
      state:data.state,
      type:data.type
    }
    this.address.EditAddress(data.addressId,reqdata).subscribe((response:any)=>{
      console.log(response);
      this.GetAllAddress();
    })
  }

  haveAddresses(){
    return this.ListOfAddress !== undefined;
  }
  login(){
    return !!localStorage.getItem('Token');
  }
}
