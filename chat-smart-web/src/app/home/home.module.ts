import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MessagesComponent } from './messages/messages.component';
import { StompclientModule } from '../stompclient/stompclient.module';



@NgModule({
  declarations: [
    HomeComponent, MessagesComponent
  ],
  imports: [
    CommonModule, StompclientModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
