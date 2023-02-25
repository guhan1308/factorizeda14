import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatepassentriesService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getGatepassentries(): Observable<any> {
    return this.apiRequest.get(`api/gatepassentries`);
  }

  getGatepassentriesbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/gatepassentries/${id}`);
  }


  postGatepassentries(payload): Observable<any> {
    return this.apiRequest.post(`api/gatepassentries`, payload);
  }

  putGatepassentries(gatepassentries): Observable<any> {
    return this.apiRequest.put(`api/gatepassentries/${gatepassentries.id}`, gatepassentries);
  }

  deleteGatepassentries(id): Observable<any> {
    return this.apiRequest.delete(`api/gatepassentries/${id}`);
  }


}
