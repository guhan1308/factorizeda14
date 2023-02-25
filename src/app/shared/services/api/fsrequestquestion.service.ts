import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { Fsrequestquestion } from 'app/shared/models/fsrequestquestion.model';

@Injectable({
  providedIn: 'root'
})
export class FsrequestquestionService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getFsrequestquestion(): Observable<any> {
    return this.apiRequest.get(`api/fsrequestquestions`);
  }

  getFsrequestquestionbyid(id: number): Observable<any> {
    return this.apiRequest.get(`api/fsrequestquestions/${id}`);
  }

  postFsrequestquestion(fsrequestquestion : Fsrequestquestion): Observable<any> {
    return this.apiRequest.post(`api/fsrequestquestions`, fsrequestquestion);
  }

  
  postBulkFsrequestquestion(fsrequestquestion : Fsrequestquestion[]): Observable<any> {
    return this.apiRequest.post(`api/fsrequestquestions/bulkcreate`, fsrequestquestion);
  }

  putFsrequestquestion(fsrequestquestion : Fsrequestquestion): Observable<any> {
    return this.apiRequest.put(`api/fsrequestquestions/${fsrequestquestion.id}`, fsrequestquestion);
  }

  deleteFsrequestquestion(id : number): Observable<any> {
    return this.apiRequest.delete(`api/fsrequestquestions/${id}`);
  }


}
