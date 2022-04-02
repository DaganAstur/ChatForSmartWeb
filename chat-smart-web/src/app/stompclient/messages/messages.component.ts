import { Component, OnInit } from '@angular/core';
import { Message } from '@stomp/stompjs';
import { ChatMessage, MessageType } from '../model/chat-message';
import { RxStompService } from '../rx-stomp.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  receivedMessages: string[] = [];

  constructor(private rxStompService: RxStompService) { }

  ngOnInit(): void {
    this.rxStompService.watch('/topic/public').subscribe((message: Message) => {
      this.receivedMessages.push(message.body);
      console.log("Received", message);
      this.rxStompService.publish({ destination: '/app/chat.newUser', body: "username" });
    });
  }

  onSendMessage() {
    const content  = `Message generated at ${new Date()}`;
    const message:ChatMessage = new ChatMessage(MessageType.CHAT, content, "Me", new Date().toDateString());
    this.rxStompService.publish({ destination: '/app/chat.send', body: JSON.stringify(message)});
  }

}
