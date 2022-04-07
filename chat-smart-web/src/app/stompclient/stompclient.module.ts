import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxStompService } from './services/rx-stomp.service';
import { rxStompServiceFactory } from './services/rx-stomp-service-factory';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers:[
    { provide: RxStompService,
    useFactory: rxStompServiceFactory
  }
  ],
  exports: []
})
export class StompclientModule { }
