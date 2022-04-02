import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ChatService, WebsocketService]
})
export class WebsocketModule { }
