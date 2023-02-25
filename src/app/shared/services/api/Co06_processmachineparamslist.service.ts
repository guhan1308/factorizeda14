import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Co06_processmachineparamslistService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getCo06_processmachineparamslists(): Observable<any> {
    return this.apiRequest.get(`api/co06_processmachineparamslists`);
  }

  getCo06_processmachineparamslistbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/co06_processmachineparamslists/${id}`);
  }

  postCo06_processmachineparamslist(payload): Observable<any> {
    return this.apiRequest.post(`api/co06_processmachineparamslists`, payload);
  }

  putCo06_processmachineparamslist(co06_processmachineparamslist): Observable<any> {
    return this.apiRequest.put(`api/co06_processmachineparamslists/${co06_processmachineparamslist.id}`, co06_processmachineparamslist);
  }

  deleteCo06_processmachineparamslist(id): Observable<any> {
    return this.apiRequest.delete(`api/co06_processmachineparamslists/${id}`);
  }


}
