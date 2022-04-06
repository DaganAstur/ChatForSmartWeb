import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxStompService } from './rx-stomp.service';
import { rxStompServiceFactory } from './rx-stomp-service-factory';
import { MessagesComponent } from '../home/messages/messages.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers:[
    { provide: RxStompService,
    useFactory: rxStompServiceFactory
  }
  ],
  exports: []
})
export class StompclientModule { }
