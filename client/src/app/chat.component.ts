import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;
  id: string;

  constructor(private chatService: ChatService) {}

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      if (message.type === 'new-message') {
          this.messages.push(message);
      } else if (message.type === 'id') {
          this.id = message.id;
      }
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
