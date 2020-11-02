import { BaseComponent } from 'src/app/lib/base-component';
import { Component, OnInit,Injector } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {  
    this.loadScripts();
  }

}
