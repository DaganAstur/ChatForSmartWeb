import { Injectable, OnInit } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';

@Injectable({
  providedIn: 'root'
})

export class RxStompService extends RxStomp {  
}
