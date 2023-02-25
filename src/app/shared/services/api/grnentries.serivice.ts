import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrnentriesService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getGrnentries(): Observable<any> {
    return this.apiRequest.get(`api/grnentries`);
  }

  getGrnentriesbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/grnentries/${id}`);
  }

  getGRNrasiedRecords(): Observable<any> {
    return this.apiRequest.get('api/grnentriesraisedrecords');

  }

  postGrnentries(payload): Observable<any> {
    return this.apiRequest.post(`api/grnentries`, payload);
  }

  putGrnentries(grnentires): Observable<any> {
    return this.apiRequest.put(`api/grnentries/${grnentires.id}`, grnentires);
  }

  deleteGrnentries(id): Observable<any> {
    return this.apiRequest.delete(`api/grnentries/${id}`);
  }


}
