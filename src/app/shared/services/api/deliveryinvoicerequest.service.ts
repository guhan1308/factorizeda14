import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

import { Deliveryinvoicerequest } from 'app/shared/models/deliveryinvoicerequest.model';
@Injectable({
  providedIn: 'root'
})
export class DeliveryinvoicerequestService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }


  getDeliveryinvoicerequest(): Observable<any> {
    return this.apiRequest.get(`api/deliveryinvoicerequests`);
  }


  getDeliveryinvoicerequestno(): Observable<any> {
    return this.apiRequest.get(`api/deliveryinvoicerequestsno`);
  }

  getDeliveryinvoicerequestbyId(id): Observable<any> {
    return this.apiRequest.get(`api/deliveryinvoicerequests/${id}`);
  }

  getDeliveryinvoicerequestbyreqno(reqno): Observable<any> {
    return this.apiRequest.get(`api/deliveryinvoicerequests/reqno/${reqno}`);
  }

  postDeliveryinvoicerequest(Deliveryinvoicerequest: Deliveryinvoicerequest): Observable<any> {
    return this.apiRequest.post(`api/deliveryinvoicerequests`, Deliveryinvoicerequest);
  }


  putDeliveryinvoicerequest(Deliveryinvoicerequest: Deliveryinvoicerequest): Observable<any> {
    return this.apiRequest.put(`api/deliveryinvoicerequests/${Deliveryinvoicerequest.id}`, Deliveryinvoicerequest);
  }

  deleteDeliveryinvoicerequestbyId(cid: number): Observable<any> {
    return this.apiRequest.delete(`api/deliveryinvoicerequests/${cid}`);
  }

}
