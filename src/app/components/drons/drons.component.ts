import { Component, OnInit } from '@angular/core';
import {DronsService, Dron} from '../../services/drons.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-drons',
  templateUrl: './drons.component.html',
})
export class DronsComponent implements OnInit {


  drons:Dron[] = [];

  constructor(private _dronsService:DronsService,
              private router:Router  ) { }

  ngOnInit() {
    this.drons = this._dronsService.getDrons();
    // console.log(this.drons);
  }

  seeDron(idx:number){
    // console.log(idx);
    this.router.navigate(['/dron',idx]);
  }

}
