import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DronsService} from '../../services/drons.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  drons:any[] = [];
  term:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _dronsService:DronsService    ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>{
      this.term = params['term'];
      this.drons = this._dronsService.lookDron(params['term']);
      console.log(this.drons);
    })

  }

}
