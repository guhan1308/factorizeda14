import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaserequestsService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getPurchaserequests(): Observable<any> {
    return this.apiRequest.get(`api/purchaserequests`);
  }

  getPurchaserequestsbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/purchaserequests/${id}`);
  }

  postPurchaserequests(payload): Observable<any> {
    return this.apiRequest.post(`api/purchaserequests`, payload);
  }

  putPurchaserequests(purchaserequest): Observable<any> {
    return this.apiRequest.put(`api/purchaserequests/${purchaserequest.id}`, purchaserequest);
  }

  deletePurchaserequests(id): Observable<any> {
    return this.apiRequest.delete(`api/purchaserequests/${id}`);
  }


}
