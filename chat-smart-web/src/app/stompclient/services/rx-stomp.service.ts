import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { IMessage } from '@stomp/stompjs';
import { Observable, tap } from 'rxjs';
import { UserService } from 'src/app/core/services/user-service.service';
import { environment } from 'src/environments/environment';
import { DestinationType } from '../model/chat-message';

@Injectable({
  providedIn: 'root'
})

export class RxStompService extends RxStomp {  
  constructor(private userService: UserService){ 
    super();
   }

   subscribeToCurrentUserRoom():Observable<IMessage> {
     return this.subscribeToRoom(this.userService.getUserName(), DestinationType.USER);
   }

  subscribeToRoom(name:string, type: DestinationType):Observable<IMessage> {
    return this.watch(environment.subscriptionPrefix +'/'+ name + '/' + DestinationType[type].toLowerCase() + environment.subscriptionQueueUrl)
    .pipe(
      tap((message: IMessage) => {
        this.publish({ destination: environment.newUserUrl, body: name });
        
      })
    );
  }
}
