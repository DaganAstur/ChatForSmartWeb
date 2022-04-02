import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StompclientModule } from './stompclient/stompclient.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StompclientModule    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
