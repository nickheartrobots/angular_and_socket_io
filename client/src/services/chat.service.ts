import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { IMessage } from '../models/message';

export class ChatService {
    private url = 'http://localhost:5000';
    private socket;

    sendMessage(message){
        this.socket.emit('add-message', message);
    }

    getMessages(): Observable<IMessage> {
        const observable = new Observable(observer => {
            this.socket = io(this.url);
            this.socket.on('message', (data) => {
                observer.next(data);
            });

            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
}

