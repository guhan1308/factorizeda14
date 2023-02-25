import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }
  private infoBS = new BehaviorSubject<string>('Activity Service Initiated');
  activityObservable = this.infoBS.asObservable();

  updateActivity(newActivity) {
      this.infoBS.next(newActivity);
  }

}
