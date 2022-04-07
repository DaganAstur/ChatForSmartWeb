import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { IMessage } from '@stomp/stompjs';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DestinationType } from '../model/chat-message';

@Injectable({
  providedIn: 'root'
})

export class RxStompService extends RxStomp {  
  subscribeToRoom(name:string, type: DestinationType):Observable<IMessage> {
    return this.watch(environment.subscriptionPrefix +'/'+ name + '/' + DestinationType[type].toLowerCase() + environment.subscriptionQueueUrl)
    .pipe(
      tap((message: IMessage) => {
        this.publish({ destination: environment.newUserUrl, body: name });
      })
    );
  }
}
