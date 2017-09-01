import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(ChatService: ChatService){

  }

  ngOnInit(): void {

  }
}
