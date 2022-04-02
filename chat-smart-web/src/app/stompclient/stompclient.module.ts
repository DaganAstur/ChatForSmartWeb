import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxStompService } from './rx-stomp.service';
import { rxStompServiceFactory } from './rx-stomp-service-factory';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    { provide: RxStompService,
    useFactory: rxStompServiceFactory
  }
  ],
  exports: [MessagesComponent]
})
export class StompclientModule { }
