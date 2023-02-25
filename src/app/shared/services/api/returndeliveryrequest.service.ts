import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

import { Returndeliveryrequest } from 'app/shared/models/returndeliveryrequest.model';
@Injectable({
  providedIn: 'root'
})
export class ReturndeliveryrequestService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }


  getReturndeliveryrequest(): Observable<any> {
    return this.apiRequest.get(`api/returndeliveryrequests`);
  }


  getReturndeliveryrequestno(): Observable<any> {
    return this.apiRequest.get(`api/returndeliveryrequestsno`);
  }

  getReturndeliveryrequestbyId(id): Observable<any> {
    return this.apiRequest.get(`api/returndeliveryrequests/${id}`);
  }

  getReturndeliveryrequestbyreqno(reqno): Observable<any> {
    return this.apiRequest.get(`api/returndeliveryrequests/reqno/${reqno}`);
  }

  postReturndeliveryrequest(Returndeliveryrequest: Returndeliveryrequest): Observable<any> {
    return this.apiRequest.post(`api/returndeliveryrequests`, Returndeliveryrequest);
  }


  putReturndeliveryrequest(Returndeliveryrequest: Returndeliveryrequest): Observable<any> {
    return this.apiRequest.put(`api/returndeliveryrequests/${Returndeliveryrequest.id}`, Returndeliveryrequest);
  }

  deleteReturndeliveryrequestbyId(cid: number): Observable<any> {
    return this.apiRequest.delete(`api/returndeliveryrequests/${cid}`);
  }

}
