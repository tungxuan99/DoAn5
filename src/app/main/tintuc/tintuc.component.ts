import { BaseComponent } from 'src/app/lib/base-component';
import { Component, OnInit,Injector } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent  extends BaseComponent implements OnInit {
  public list_tintuc:any;
  public tinmois:any;
  public totalRecords:any;
  public tintucs:any;
  public pageSize = 6;
  public page = 1;
  public formsearch:any;
  constructor(injector: Injector,private fb: FormBuilder) { 
    super(injector);
  }

  ngOnInit(): void {
    this.formsearch=this.fb.group({
      'tieude':['']
    });
    Observable.combineLatest(
      this._api.get('/api/tintuc/get-all'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.tintucs = res[0];
      this.tinmois=[this.tintucs[0],this.tintucs[1],this.tintucs[2],this.tintucs[3],this.tintucs[4]];
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
    this.search();
  }
  loadPage(page) { 
    this._api.post('/api/tintuc/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_tintuc = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  } 

  search() { 
    this.page = 1;
    this.pageSize = 6;
    this._api.post('/api/tintuc/search',{page: this.page, pageSize: this.pageSize, tenlop: this.formsearch.get('tieude').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_tintuc = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }
  catText(text: string, limit: number): string {
    if(text.length > limit) {
      return text.substr(0, limit) + "...";
    }
    return text;
  }

}
