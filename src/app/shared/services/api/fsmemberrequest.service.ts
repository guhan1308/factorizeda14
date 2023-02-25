import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FsmemberrequestsService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getFsmemberrequests(): Observable<any> {
    return this.apiRequest.get(`api/fsmemberrequests`);
  }

  getFsmemberrequestsbyid(id: number): Observable<any> {
    return this.apiRequest.get(`api/fsmemberrequests/${id}`);
  }

  postFsmemberrequests(fsquestiontemplate): Observable<any> {
    return this.apiRequest.post(`api/fsmemberrequests`, fsquestiontemplate);
  }

  putFsmemberrequests(fsquestiontemplate): Observable<any> {
    return this.apiRequest.put(`api/fsmemberrequests/${fsquestiontemplate.id}`, fsquestiontemplate);
  }

  deleteFsmemberrequests(id : number): Observable<any> {
    return this.apiRequest.delete(`api/fsmemberrequests/${id}`);
  }


}
