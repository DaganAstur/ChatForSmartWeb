import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MessagesComponent } from './messages/messages.component';
import { StompclientModule } from '../stompclient/stompclient.module';

import { MatButtonModule } from '@angular/material/button';
import { MyMessagesComponent } from './my-messages/my-messages.component';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    HomeComponent, MessagesComponent, MyMessagesComponent
  ],
  imports: [
    CommonModule, StompclientModule, MatButtonModule, MatListModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
