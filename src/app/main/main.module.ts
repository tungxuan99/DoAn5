import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { MenuComponent } from '../layout/menu/menu.component';
import { SukienComponent } from './sukien/sukien.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';


export const mainRoutes: Routes = [
  {
      path: '', component: MainComponent,
      children: [
        {
            path: '', component: HomeComponent,
        },
        {
          path: 'sukien', component: SukienComponent,
        },
        {
          path: 'gioithieu', component: GioithieuComponent,
        },
      ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    SukienComponent,
    GioithieuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
