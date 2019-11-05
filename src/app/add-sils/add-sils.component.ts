import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule} from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-sils',
  templateUrl: './add-sils.component.html',
  styleUrls: ['./add-sils.component.scss']
})
export class AddSilsComponent implements OnInit {
  data ={
    nam  :'',
    Telf :'',
    Address  :'',
    Skils :'',
    prix :'',
    uid: ''
  }
  items: Observable<any[]>;
  itemList :AngularFireList<any>


  constructor(public db :AngularFireDatabase,public router : Router) { 
    
this.itemList = db.list('skils') ;
this.data.uid=localStorage.getItem('uid')

  }
  insertSkils(){
  
    this.itemList.push({
      nam  : this.data.nam  ,       
      Telf : this.data.Telf,
      Addrss  : this.data.Address,
      Skil: this.data.Skils,
      prix :this.data.prix,
      uid : this.data.uid,



    }) ;
    console.log(this.data.uid);
    
    this.router.navigate(['\myskils']) 
 
 

  }

  ngOnInit() {
  
   
  }
  

}
