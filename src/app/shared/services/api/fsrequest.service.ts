import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { Fsrequest } from 'app/shared/models/fsrequest.model';
@Injectable({
  providedIn: 'root'
})
export class FsrequestService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getFsrequest(): Observable<any> {
    return this.apiRequest.get(`api/fsrequests`);
  }

  getFsrequestbyid(id: number): Observable<any> {
    return this.apiRequest.get(`api/fsrequests/${id}`);
  }

  getFsrequestQuestionsbyid(id: number): Observable<any> {
    return this.apiRequest.get(`api/fsrequests/${id}/questions`);
  }

  postFsrequest(fsrequest: Fsrequest): Observable<any> {
    return this.apiRequest.post(`api/fsrequests`, fsrequest);
  }

  postFsrequestandmemberrequest(payload): Observable<any> {
    return this.apiRequest.post(`api/fsrequests/createfeasibility`, payload);
  }

  putFsrequest(fsrequest: Fsrequest): Observable<any> {
    return this.apiRequest.put(`api/fsrequests/${fsrequest.id}`, fsrequest);
  }

  deleteFsrequest(id: number): Observable<any> {
    return this.apiRequest.delete(`api/fsrequests/${id}`);
  }


}
