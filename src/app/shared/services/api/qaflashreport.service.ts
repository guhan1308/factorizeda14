import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QaflashreportService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getQaflashreports(): Observable<any> {
    return this.apiRequest.get(`api/qaflashreports`);
  }

  getQaflashreportbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/qaflashreports/${id}`);
  }

  postQaflashreport(payload): Observable<any> {
    return this.apiRequest.post(`api/qaflashreports`, payload);
  }

  putQaflashreport(qaflashreport): Observable<any> {
    return this.apiRequest.put(`api/qaflashreports/${qaflashreport.id}`, qaflashreport);
  }

  deleteQaflashreport(id): Observable<any> {
    return this.apiRequest.delete(`api/qaflashreports/${id}`);
  }


}
