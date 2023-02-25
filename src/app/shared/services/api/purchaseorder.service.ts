import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseorderService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getPurchaseorder(): Observable<any> {
    return this.apiRequest.get(`api/purchaseorders`);
  }

  getPurchaseorderbyid(id: number): Observable<any> {
    return this.apiRequest.get(`api/purchaseorders/${id}`);
  }

  getPurchaseorderbysupplier(searchPayload): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.append('supplierid', searchPayload.supplierid);
    params = params.append('status', 'Approved');
    return this.apiRequest.get('api/purchaseordersquery/', params);
  }

  postPurchaseorder(payload): Observable<any> {
    return this.apiRequest.post(`api/purchaseorders`, payload);
  }

  putPurchaseorder(purchaseorder): Observable<any> {
    return this.apiRequest.put(`api/purchaseorders/${purchaseorder.id}`, purchaseorder);
  }

  deletePurchaseorder(id): Observable<any> {
    return this.apiRequest.delete(`api/purchaseorders/${id}`);
  }


}
