import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './Home/main/main.component';
import { HeaderComponent } from './Home/header/header.component';
import { MenuComponent } from './Home/menu/menu.component';
import { SlideComponent } from './Home/slide/slide.component';
import { FooterComponent } from './Home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    HeaderComponent,
    MenuComponent,
    SlideComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
