import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FsmemberquestionsService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getFsmemberquestions(): Observable<any> {
    return this.apiRequest.get(`api/fsmemberquestions`);
  }

  getFsmemberquestionsbyid(id: number): Observable<any> {
    return this.apiRequest.get(`api/fsmemberquestions/${id}`);
  }

  postFsmemberquestions(fsmemberquestion): Observable<any> {
    return this.apiRequest.post(`api/fsmemberquestions`, fsmemberquestion);
  }

  putFsmemberquestions(fsmemberquestion): Observable<any> {
    return this.apiRequest.put(`api/fsmemberquestions/${fsmemberquestion.id}`, fsmemberquestion);
  }

  deleteFsmemberquestions(id : number): Observable<any> {
    return this.apiRequest.delete(`api/fsmemberquestions/${id}`);
  }


}
