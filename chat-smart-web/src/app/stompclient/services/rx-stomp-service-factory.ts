import { RxStompService } from './rx-stomp.service';
import { myRxStompConfig } from './my-rx-stomp.config';
import { UserService } from 'src/app/core/services/user-service.service';

export function rxStompServiceFactory() {
  const rxStomp = new RxStompService(new UserService());
  rxStomp.configure(myRxStompConfig);
  rxStomp.activate();
  return rxStomp;
}