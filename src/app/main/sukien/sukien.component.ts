import { BaseComponent } from 'src/app/lib/base-component';
import { Component, OnInit,Injector } from '@angular/core';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-sukien',
  templateUrl: './sukien.component.html',
  styleUrls: ['./sukien.component.css']
})
export class SukienComponent extends BaseComponent implements OnInit {
  list_tintuc:any;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('/api/tintuc/get-all'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_tintuc = res[0];
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
  }
}

