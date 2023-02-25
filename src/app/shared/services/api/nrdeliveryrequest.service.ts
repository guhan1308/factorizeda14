import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

import { Nrdeliveryrequest } from 'app/shared/models/nrdeliveryrequest.model';
@Injectable({
  providedIn: 'root'
})
export class NrdeliveryrequestService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }


  getNrdeliveryrequest(): Observable<any> {
    return this.apiRequest.get(`api/nrdeliveryrequests`);
  }


  getNrdeliveryrequestno(): Observable<any> {
    return this.apiRequest.get(`api/nrdeliveryrequestsno`);
  }

  getNrdeliveryrequestbyId(id): Observable<any> {
    return this.apiRequest.get(`api/nrdeliveryrequests/${id}`);
  }

  getNrdeliveryrequestbyreqno(reqno): Observable<any> {
    return this.apiRequest.get(`api/nrdeliveryrequests/reqno/${reqno}`);
  }

  postNrdeliveryrequest(Nrdeliveryrequest: Nrdeliveryrequest): Observable<any> {
    return this.apiRequest.post(`api/nrdeliveryrequests`, Nrdeliveryrequest);
  }


  putNrdeliveryrequest(Nrdeliveryrequest: Nrdeliveryrequest): Observable<any> {
    return this.apiRequest.put(`api/nrdeliveryrequests/${Nrdeliveryrequest.id}`, Nrdeliveryrequest);
  }

  deleteNrdeliveryrequestbyId(cid: number): Observable<any> {
    return this.apiRequest.delete(`api/nrdeliveryrequests/${cid}`);
  }

}
