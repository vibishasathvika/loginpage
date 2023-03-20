import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emsg=""

  loginform = this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
  })


  constructor(private fb:FormBuilder, private api:ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
   
    
    if( this.loginform.valid){
      let username = this.loginform.value.username
      let pswd = this.loginform.value.pswd
      this.api.login(username,pswd)
      .subscribe(
        //response 200
        
        (result:any)=>{
        console.log(result);
        alert(result.message)
        //this.router.navigateByUrl('allproducts')
        
      },
      //result 404
      (result:any)=>{
        this.emsg = result.error.message
       // alert(result.error.message)
      }
      )
      }
   else{
    alert('invalid form')
   }
    
  }

}
