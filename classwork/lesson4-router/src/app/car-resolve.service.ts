import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class CarResolveService implements Resolve<any> {

  resolve(): Observable<any> {
    return Observable.of({ courseId: 7});
  };

}
