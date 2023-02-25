import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

import { Transferrequest } from 'app/shared/models/transferrequest.model';
@Injectable({
  providedIn: 'root'
})
export class TransferrequestService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }


  getTransferrequest(): Observable<any> {
    return this.apiRequest.get(`api/transferrequests`);
  }


  getTransferrequestRecords(): Observable<any> {
    return this.apiRequest.get('api/transferrequestsrecords');
  }

  getTransferrequestno(): Observable<any> {
    return this.apiRequest.get(`api/transferrequestsno`);
  }

  getTransferrequestbyId(id): Observable<any> {
    return this.apiRequest.get(`api/transferrequests/${id}`);
  }

  getTransferrequestbyreqno(reqno): Observable<any> {
    return this.apiRequest.get(`api/transferrequests/reqno/${reqno}`);
  }

  postTransferrequest(Transferrequest: Transferrequest): Observable<any> {
    return this.apiRequest.post(`api/transferrequests`, Transferrequest);
  }


  putTransferrequest(Transferrequest: Transferrequest): Observable<any> {
    return this.apiRequest.put(`api/transferrequests/${Transferrequest.id}`, Transferrequest);
  }

  deleteTransferrequestbyId(cid: number): Observable<any> {
    return this.apiRequest.delete(`api/transferrequests/${cid}`);
  }

}
