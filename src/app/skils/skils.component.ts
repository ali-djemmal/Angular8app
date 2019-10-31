import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule} from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router'

declare var $:any ;
@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss']
})
export class SkilsComponent implements OnInit {

  items: Observable<any[]>;
  itemList :AngularFireList<any>;
  myItemArry =[]


  // 1 binding
$key:string
  nam:string
   Telf:string
 Addrss:string
 Skil:string
 prix :string

  constructor(public db :AngularFireDatabase,public router : Router ,public rout :ActivatedRoute) { 
    // recuperation des donner de firebase

    this.itemList = db.list('skils') ;
    this.itemList.snapshotChanges().subscribe(actions =>{
      actions.forEach(action => {
        let y =   action.payload.toJSON()
        y['$key'] = action.key
        this.myItemArry.push(y as ListIemClass)
        console.log(this.myItemArry);
      })

    })

    
    
    
  }

  ngOnInit() {
    // modal jQuery fonction

    $(document).ready(function(){
      $('.modal').modal();
    });
  }
/*
  onEdite( $key:string, nam :string, Telf :string, Addrss :string, Skil :string, prix :string){
// form modal binding
this.$key =$key;
this.nam=nam;
this.Telf=Telf;
this.Addrss=Addrss;
this.Skil=Skil;
this.prix=prix;

    console.log('edite');
    

  }

  onEditeForm(){

    this.itemList.set(this.$key,{
     
      nam:this.nam,
      Telf:this.Telf,
      Addrss:this.Addrss,
      Skil:this.Skil,
      prix:this.prix,

    })
    this. myItemArry =[];
    this.nam="";
    this.Telf="";
    this.Addrss="";
    this.Skil="";
    this.prix="";
   
  }

  */




  
 ondetail(key : string){
   this.router.navigate(['detaills/'+key]);
  }
}
export class ListIemClass {
$key:string;
nam  :string;   
Telf :string;
Addrss :string;
Skil :string;
prix :string;


}
