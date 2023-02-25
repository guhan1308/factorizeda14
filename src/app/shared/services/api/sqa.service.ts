import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SqasService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getSqas(): Observable<any> {
    return this.apiRequest.get(`api/sqas`);
  }

  getSqasbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/sqas/${id}`);
  }

  postSqas(payload): Observable<any> {
    return this.apiRequest.post(`api/sqas`, payload);
  }

  putSqas(sqa): Observable<any> {
    return this.apiRequest.put(`api/sqas/${sqa.id}`, sqa);
  }

  deleteSqas(id): Observable<any> {
    return this.apiRequest.delete(`api/sqas/${id}`);
  }


}
