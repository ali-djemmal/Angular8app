import { Component, OnInit , Input} from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule} from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'

declare var $:any ;
@Component({
  selector: 'app-myskils',
  templateUrl: './myskils.component.html',
  styleUrls: ['./myskils.component.scss']
})
export class MyskilsComponent implements OnInit {
  items: Observable<any[]>;
  itemList :AngularFireList<any>;
  myItemArry =[]
  @Input() nam:String
  @Input() Telf:String
  @Input() Addrss:String
  @Input() Skil:String
  @Input() prix :String

  constructor(public db :AngularFireDatabase) { 
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
    $(document).ready(function(){
      $('.modal').modal();
    });
  }

  onEdite( $key:String, nam :String, Telf :String, Addrss :String, Skil :String, prix :String){

this.nam=nam;
this.Telf=Telf;
this.Addrss=Addrss;
this.Skil=Skil;
this.prix=prix;



    console.log('edite');
    

  }

  onDellet($key){
    console.log('delete');
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
