import { BaseComponent } from 'src/app/lib/base-component';
import { Component, OnInit,Injector } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {  
    this.loadScripts();
  }

}