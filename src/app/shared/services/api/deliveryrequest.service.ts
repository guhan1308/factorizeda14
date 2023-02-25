import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

import { Deliveryrequest } from 'app/shared/models/deliveryrequest.model';
@Injectable({
  providedIn: 'root'
})
export class DeliveryrequestService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }


  getDeliveryrequest(): Observable<any> {
    return this.apiRequest.get(`api/deliveryrequests`);
  }

  getDeliveryrequestbyId(id): Observable<any> {
    return this.apiRequest.get(`api/deliveryrequests/${id}`);
  }

  postDeliveryrequest(Deliveryrequest: Deliveryrequest): Observable<any> {
    return this.apiRequest.post(`api/deliveryrequests`, Deliveryrequest);
  }


  putDeliveryrequest(Deliveryrequest: Deliveryrequest): Observable<any> {
    return this.apiRequest.put(`api/deliveryrequests/${Deliveryrequest.id}`, Deliveryrequest);
  }

  deleteDeliveryrequestbyId(cid: number): Observable<any> {
    return this.apiRequest.delete(`api/deliveryrequests/${cid}`);
  }

}
