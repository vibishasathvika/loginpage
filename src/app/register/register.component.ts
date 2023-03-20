import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emsg=""
  registerform = this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
  })

  constructor(private fb:FormBuilder,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    
    if( this.registerform.valid){
      let username = this.registerform.value.username
      let pswd = this.registerform.value.pswd
      this.api.register(username,pswd)
      .subscribe((result:any)=>{
        console.log(result);
        alert(result.message)
        this.router.navigateByUrl('')
        
      },
      (result:any)=>{
         this.emsg = result.error.message

      }
      )
      }
      else{
        alert('invalid form')
      }
   
    
  }



}
