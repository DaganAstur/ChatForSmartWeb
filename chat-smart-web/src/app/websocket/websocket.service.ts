import { Injectable } from '@angular/core';
import { Observable, Observer, of, Subject } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  private subject: Subject<MessageEvent> = new Subject();

  public connect(url:string): AnonymousSubject<MessageEvent> {
    console.log("Connect on web socket service");
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    console.log("Subject")
    return this.subject;
  }

  private create(url:string): AnonymousSubject<MessageEvent> {
    console.log("Create ");
    let ws = new WebSocket(url);

    let observable = new Observable((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      error: null,
      complete: null,
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    } as unknown as Observer<MessageEvent>;
    //return Subject.create(observer, observable);
    return new AnonymousSubject<MessageEvent>(observer, observable);
  }
}
