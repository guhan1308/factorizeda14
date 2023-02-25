import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CbcontractsService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getCbcontracts(): Observable<any> {
    return this.apiRequest.get(`api/cbcontracts`);
  }

  getCbcontractsbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/cbcontracts/${id}`);
  }

  postCbcontracts(payload): Observable<any> {
    return this.apiRequest.post(`api/cbcontracts`, payload);
  }

  putCbcontracts(cbcontract): Observable<any> {
    return this.apiRequest.put(`api/cbcontracts/${cbcontract.id}`, cbcontract);
  }

  deleteCbcontracts(id): Observable<any> {
    return this.apiRequest.delete(`api/cbcontracts/${id}`);
  }


}
