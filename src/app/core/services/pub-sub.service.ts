import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubSubService {

  constructor() { }

  /** Track when the primary fixed nav is toggled open and closed. */
  private toggleNavPublisher = new BehaviorSubject<boolean>(true);

  publishToggleNavState(state: boolean) {
    this.toggleNavPublisher.next(state);
  }

  getToggleNavState() {
    return this.toggleNavPublisher.asObservable();
  }
}
