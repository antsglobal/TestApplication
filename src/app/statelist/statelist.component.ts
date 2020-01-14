import { Component, OnInit } from '@angular/core';
import {StateList} from './statelist';
import {StateListService} from './statelist.service'

@Component({
  selector: 'app-statelist',
  templateUrl: './statelist.component.html',
  styleUrls: ['./statelist.component.css'],
  providers:[StateListService]
})
export class StatelistComponent implements OnInit {

  stateList:any[];

  constructor(private _stateListService:StateListService) {
   }

  ngOnInit() {
    this._stateListService.getStateList()
        .subscribe(stateData => this.stateList = stateData);
        this._stateListService.getStateList().subscribe(stateData => console.log(stateData));
  }

}
