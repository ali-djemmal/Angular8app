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
    Addrss  :'',
    Skil :'',
    prix :''

  }
  items: Observable<any[]>;
  itemList :AngularFireList<any>


  constructor(public db :AngularFireDatabase,public router : Router) { 
this.itemList = db.list('skils') ;


  }
  insertSkils(){
  
    this.itemList.push({
      nam  : this.data.nam  ,       
      Telf : this.data.Telf,
      Addrss  : this.data.Addrss,
      Skil : this.data.Skil,
      prix :this.data.prix,



    }) ;
    
    this.router.navigate(['\myskils']) 
 
   console.log(this.data.nam);

  }

  ngOnInit() {
  
   
  }
  

}
