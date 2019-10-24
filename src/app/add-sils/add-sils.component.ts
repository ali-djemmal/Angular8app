import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sils',
  templateUrl: './add-sils.component.html',
  styleUrls: ['./add-sils.component.scss']
})
export class AddSilsComponent implements OnInit {
  nam  :String  ;
  Telf :String ;
  Addrss  :String ;
  Skil :String ; 
  prix :String ;
  constructor() { }

  ngOnInit() {
  }

}
