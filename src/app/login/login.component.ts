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
  

  constructor(private auth :AngularFireAuth, private router :Router) { }

  ngOnInit() {
  }
login(){
  this.auth.auth.signInWithEmailAndPassword(this.email,this.password)
  .then(user=>{
    console.log(this.email,this.password);
    localStorage.setItem('isLogine','true')
    this.auth.user.subscribe(user => {
      localStorage.setItem('uid', user.uid) ;
      localStorage.setItem('email', user.email) ;
    
    });

    this.router.navigate(['home'])
    window.location.reload();
  
  }).catch(error=>{
   console.error();
    ;
    
  }
  )

}
}
