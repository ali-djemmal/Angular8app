import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email: string = '';
password :string ='';
isLoggedIn:any ;

  constructor(private auth :AngularFireAuth, private router :Router) {
   
   }

  ngOnInit() { 
   this.isLoggedIn= localStorage.getItem('isLogine') ;
   if(!this.isLoggedIn){
    this.router.navigate(['home']);
  }
  }
login(){
  this.auth.auth.signInWithEmailAndPassword(this.email,this.password)
  .then(user=>{
  
    localStorage.setItem('isLogine','true')
    this.isLoggedIn= true
    this.auth.user.subscribe(user => {
      localStorage.setItem('uid', user.uid) ;
      localStorage.setItem('email', user.email) ;
      window.location.replace('myskils')
     // this.router.navigate(['home']);
      
    //  window.location.reload();
    //  this.router.navigate(['home'])
    });

   
   
  
  }).catch(error=>{
   console.error();
    ;
    
  }
  )

}
}
