import { BaseComponent } from 'src/app/lib/base-component';
import { Component, OnInit,Injector } from '@angular/core';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
@Component({
  selector: 'app-ct-tintuc',
  templateUrl: './ct-tintuc.component.html',
  styleUrls: ['./ct-tintuc.component.css']
})
export class CtTintucComponent  extends BaseComponent implements OnInit {
  public item:any;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    this.item = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      console.log(id);
      this._api.get('/api/tintuc/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.item = res;
        console.log(this.item);
        setTimeout(() => {
          this.loadScripts();
        });
      }); 
    });
  }

}
