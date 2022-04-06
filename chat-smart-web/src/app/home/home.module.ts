import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MessagesComponent } from './messages/messages.component';
import { StompclientModule } from '../stompclient/stompclient.module';

import { MatButtonModule } from '@angular/material/button';
import { MyMessagesComponent } from './my-messages/my-messages.component';



@NgModule({
  declarations: [
    HomeComponent, MessagesComponent, MyMessagesComponent
  ],
  imports: [
    CommonModule, StompclientModule, MatButtonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
