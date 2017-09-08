import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:5000';
  private socket;
  private id;

  sendMessage(message){
    this.socket.emit('add-message', message);
  }

  getMessages() {
    const observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });

      this.socket.on('id', id => console.log(id));

      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
