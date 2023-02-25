import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CpauditsService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getCpaudits(): Observable<any> {
    return this.apiRequest.get(`api/cpaudits`);
  }

  getCpauditsbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/cpaudits/${id}`);
  }

  postCpaudits(payload): Observable<any> {
    return this.apiRequest.post(`api/cpaudits`, payload);
  }

  putCpaudits(cpaudit): Observable<any> {
    return this.apiRequest.put(`api/cpaudits/${cpaudit.id}`, cpaudit);
  }

  deleteCpaudits(id): Observable<any> {
    return this.apiRequest.delete(`api/cpaudits/${id}`);
  }


}
