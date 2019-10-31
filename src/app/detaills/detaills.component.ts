import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule} from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'
@Component({
  selector: 'app-detaills',
  templateUrl: './detaills.component.html',
  styleUrls: ['./detaills.component.scss']
})
export class DetaillsComponent implements OnInit {
id:any;
items: Observable<any[]>;
itemList :AngularFireList<any>;


  nam:string
   Telf:string
 Addrss:string
 Skil:string
 prix :string

  myItemArry =[]
  constructor(public db :AngularFireDatabase,public rout :ActivatedRoute) { 

    this.itemList = db.list('skils') ;
    this.rout.params.subscribe( params => {
      this.id = params ;
      } )
    this.itemList.snapshotChanges().subscribe(actions =>{
      actions.forEach(action => {
        let y =   action.payload.toJSON()
        y['$key'] = action.key

        if(action.key === this.id['id']){
        this.myItemArry.push(y as ListIemClass)
        this.nam =      this.myItemArry[0]['nam']
        this.Telf = this.myItemArry[0]['Telf']
        this.Addrss = this.myItemArry[0]['Addrss']
        this.Skil = this.myItemArry[0]['Skil']
        this.prix  = this.myItemArry[0]['prix']
      }
       
      })

    })

    

   
  }

  ngOnInit() {
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
