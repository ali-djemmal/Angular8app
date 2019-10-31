import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app' ;
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
user : Observable<firebase.User>
private isLoggedIn : Boolean = false ;
private email : string ;

  constructor(public afAuth : AngularFireAuth , public router :Router) { 
    this.user = afAuth.authState ;


let status = localStorage.getItem('isLogine')
 if(status === 'true'){
this.isLoggedIn = true ;

 }else {

  this.isLoggedIn = false ;
 }


    /*
    firebase.auth().onAuthStateChanged(function(user){
if(user){

this.isLoggedIn = true ;
} else {

  this.isLoggedIn = false ;
  this.router.navigate(['login']);

}

    })*/
  }

  ngOnInit() {
  }
logout(){
this.afAuth.auth.signOut();
localStorage.setItem('isLogine','false')
this.isLoggedIn = false ;
this.router.navigate(['home']);
window.location.reload();



}
}
