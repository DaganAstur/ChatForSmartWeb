import { Component, OnInit } from '@angular/core';
import { Message } from '@stomp/stompjs';
import { ChatMessage, DestinationType, MessageType } from '../../stompclient/model/chat-message';
import { RxStompService } from '../../stompclient/rx-stomp.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  receivedMessages: ChatMessage[] = [];

  constructor(private rxStompService: RxStompService) { }

  ngOnInit(): void {
    this.rxStompService.watch('/room/test/queue/messages').subscribe((message: Message) => {
      this.receivedMessages.push(JSON.parse(message.body));
      console.log("Received", message.body);
      this.rxStompService.publish({ destination: '/app/chat.newUser', body: "username" });
    });

    this.rxStompService.watch('/room/alma/queue/messages').subscribe((message: Message) => {
      this.receivedMessages.push(JSON.parse(message.body));
      console.log("Received", message.body);
      this.rxStompService.publish({ destination: '/app/chat.newUser', body: "username" });
    });
  }

  onSendMessage() {
    const content  = `Message generated at ${new Date()}`;
    const message:ChatMessage = new ChatMessage(MessageType.CHAT, content, "Me", new Date().toDateString(), 'test', DestinationType.ROOM);
    this.rxStompService.publish({ destination: '/app/room', body: JSON.stringify(message)});
  }
  onSendMessage2() {
    const content  = `Message generated at ${new Date()}`;
    const message:ChatMessage = new ChatMessage(MessageType.CHAT, content, "Me", new Date().toDateString(), 'alma', DestinationType.ROOM);
    this.rxStompService.publish({ destination: '/app/room', body: JSON.stringify(message)});
  }

}
