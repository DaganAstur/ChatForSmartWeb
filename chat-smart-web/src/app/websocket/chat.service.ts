import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';

const CHAT_URL = "ws://localhost:8090";

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<Message>>wsService.connect(CHAT_URL).pipe(
      map(
      (response: MessageEvent): Message => {
        console.log("data in chatservice ", response.data);
        let data = JSON.parse(response.data);
        return {
          author: data.author,
          message: data.message
        };
      }
    ));
  }
}
