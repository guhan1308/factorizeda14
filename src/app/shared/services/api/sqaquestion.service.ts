import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SqaquestionsService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getSqaquestions(): Observable<any> {
    return this.apiRequest.get(`api/sqaquestions`);
  }

  getSqaquestionsbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/sqaquestions/${id}`);
  }

  postSqaquestions(payload): Observable<any> {
    return this.apiRequest.post(`api/sqaquestions`, payload);
  }

  putSqaquestions(sqaquestion): Observable<any> {
    return this.apiRequest.put(`api/sqaquestions/${sqaquestion.id}`, sqaquestion);
  }

  deleteSqaquestions(id): Observable<any> {
    return this.apiRequest.delete(`api/sqaquestions/${id}`);
  }


}
