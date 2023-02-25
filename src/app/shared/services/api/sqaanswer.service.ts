import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SqaanswersService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getSqaanswers(): Observable<any> {
    return this.apiRequest.get(`api/sqaanswers`);
  }

  getSqaanswersbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/sqaanswers/${id}`);
  }

  postSqaanswers(payload): Observable<any> {
    return this.apiRequest.post(`api/sqaanswers`, payload);
  }

  putSqaanswers(sqaanswer): Observable<any> {
    return this.apiRequest.put(`api/sqaanswers/${sqaanswer.id}`, sqaanswer);
  }

  deleteSqaanswers(id): Observable<any> {
    return this.apiRequest.delete(`api/sqaanswers/${id}`);
  }


}
