import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Co07_specificationtolerancelistService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getCo07_specificationtolerancelists(): Observable<any> {
    return this.apiRequest.get(`api/co07_specificationtolerancelists`);
  }

  getCo07_specificationtolerancelistbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/co07_specificationtolerancelists/${id}`);
  }

  postCo07_specificationtolerancelist(payload): Observable<any> {
    return this.apiRequest.post(`api/co07_specificationtolerancelists`, payload);
  }

  putCo07_specificationtolerancelist(co07_specificationtolerancelist): Observable<any> {
    return this.apiRequest.put(`api/co07_specificationtolerancelists/${co07_specificationtolerancelist.id}`, co07_specificationtolerancelist);
  }

  deleteCo07_specificationtolerancelist(id): Observable<any> {
    return this.apiRequest.delete(`api/co07_specificationtolerancelists/${id}`);
  }


}
