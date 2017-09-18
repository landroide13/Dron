import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DronsService} from '../../services/drons.service';

@Component({
  selector: 'app-dron',
  templateUrl: './dron.component.html',
})
export class DronComponent {

  dron:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private _dronsService:DronsService    ) {
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.dron = this._dronsService.getDron(params['id']);
    })

  }



}
