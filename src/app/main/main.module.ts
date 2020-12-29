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
import { XemdiemComponent } from './xemdiem/xemdiem.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TintucComponent } from './tintuc/tintuc.component';
import { CtTintucComponent } from './ct-tintuc/ct-tintuc.component';


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
          path: 'tintuc', component: TintucComponent,
        },
        {
          path: 'ct-tintuc/:id', component: CtTintucComponent,
        },
        {
          path: 'gioithieu', component: GioithieuComponent,
        },
        {
          path: 'xemdiem', component: XemdiemComponent,
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
    GioithieuComponent,
    XemdiemComponent,
    TintucComponent,
    CtTintucComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ],  
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class MainModule { }
