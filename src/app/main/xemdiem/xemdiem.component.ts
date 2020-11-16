import { BaseComponent } from 'src/app/lib/base-component';
import { Component, Injector, OnInit, ViewChild, Input  } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms'; 
import { Observable} from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil'; 

@Component({
  selector: 'app-xemdiem',
  templateUrl: './xemdiem.component.html',
  styleUrls: ['./xemdiem.component.css']
})
export class XemdiemComponent extends BaseComponent implements OnInit {
  public diems:any;
  public mon:any;
  public formsearch: any;
  constructor(private fb: FormBuilder,injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    this.formsearch = this.fb.group({
      'Search': ['']     
    });
    console.log('ok1');
  }
  search() { 
    console.log('ok');
    Observable.combineLatest(
      this._api.get('/api/diem/xem-diem-hk/'+this.formsearch.get('Search').value+'/'+'22019'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.diems = res[0];
      console.log(this.diems);
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
  }
}


