import { Component, OnInit } from '@angular/core';
import { Message } from '@stomp/stompjs';
import { environment } from 'src/environments/environment';
import { ChatMessage, DestinationType, MessageType } from '../../stompclient/model/chat-message';
import { RxStompService } from '../../stompclient/services/rx-stomp.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  receivedMessages: ChatMessage[] = [];

  constructor(private rxStompService: RxStompService) { }

  ngOnInit(): void {
    this.rxStompService.subscribeToRoom("test", DestinationType.USER)
    .subscribe((message: Message) => {
      console.log("subscribed", message);
      this.receivedMessages.push(JSON.parse(message.body));
    });

    this.rxStompService.subscribeToRoom("alma", DestinationType.ROOM)
    .subscribe((message: Message) => {
      console.log("subscribed", message);
      this.receivedMessages.push(JSON.parse(message.body));
    });
    
  }

  onSendMessage() {
    const content  = `Message generated at ${new Date()}`;
    const message:ChatMessage = new ChatMessage(MessageType.CHAT, content, "user", new Date().toDateString(), 'test', DestinationType.USER);
    this.rxStompService.publish({ destination: environment.publishUrl, body: JSON.stringify(message)});
  }
  onSendMessage2() {
    const content  = `Message generated at ${new Date()}`;
    const message:ChatMessage = new ChatMessage(MessageType.CHAT, content, "user", new Date().toDateString(), 'alma', DestinationType.ROOM);
    this.rxStompService.publish({ destination: environment.publishUrl, body: JSON.stringify(message)});
  }

}
