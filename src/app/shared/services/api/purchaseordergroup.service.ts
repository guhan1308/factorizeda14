import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseordergroupService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getPurchaseordergroup(): Observable<any> {
    return this.apiRequest.get(`api/purchaseordergroups`);
  }

  getPurchaseordergroupbyid(id :number): Observable<any> {
    return this.apiRequest.get(`api/purchaseordergroups/${id}`);
  }
  
  
  getgroupedPurchaseorder(): Observable<any> {
    return this.apiRequest.get(`api/purchaseordergroupedpos`);
  }


  postPurchaseordergroup(payload): Observable<any> {
    return this.apiRequest.post(`api/purchaseordergroups`, payload);
  }

  putPurchaseordergroup(purchaseordergroup): Observable<any> {
    return this.apiRequest.put(`api/purchaseordergroups/${purchaseordergroup.id}`, purchaseordergroup);
  }

  deletePurchaseordergroup(id): Observable<any> {
    return this.apiRequest.delete(`api/purchaseordergroups/${id}`);
  }


}
