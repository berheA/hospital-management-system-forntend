import { Component} from '@angular/core';

import {Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { UserAuthService } from 'src/app/_services/user-auth.service';


@Component({
  selector: 'app-chat-',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent{
  
  title = 'grokonez';
  description = 'Angular-WebSocket Demo';

  greetings: string[] = [];
  disabled = true;
  name: any;
  content: string='';
  private stompClient:any;

  constructor(private userAuthService:UserAuthService) {
    this.name=this.userAuthService.getFirstName();
   }


  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/hms');
    this.stompClient = Stomp.over(socket);
    const _this = this;

    this.stompClient.connect({}, function (frame:any) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      _this.stompClient.subscribe('/chat/hi', function (hello:any) {
        _this.showGreeting(JSON.parse(hello.body).greeting);
      });
    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
    console.log('Disconnected!');
  }

  sendName() {
    this.stompClient.send(
      '/hospital/msgMap',
      {},
      JSON.stringify({ 'name': this.name , 'content':this.content})
    );
  }

  showGreeting(message:any) {
    this.greetings.push(message);
  }

  sender=this.userAuthService.getFirstName();
  
}
