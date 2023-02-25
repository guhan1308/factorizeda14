import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryinvoicenoteService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }


    
  getdeliveryinvoicenotes(): Observable<any> {
    return this.apiRequest.get(`api/deliveryinvoicenote`);
  }
  
  getdeliveryinvoicenotebyid(txnno): Observable<any> {
    return this.apiRequest.get(`api/deliveryinvoicenote/${txnno}`);
  }
      
  getdeliveryinvoiceraisedrecords(): Observable<any> {
    return this.apiRequest.get(`api/dcinvoiceraisedrecords`);
  }

  getitemsbyitemtype(payload): Observable<any> {
    return this.apiRequest.post(`api/deliveryinvoicenote/searchItem`, payload);
  }


  gettnbytxnno(txnno): Observable<any> {
    return this.apiRequest.get(`api/deliveryinvoicenote/txnno/${txnno}`);
  }

  postDeliveryinvoicenote(payload): Observable<any> {
    return this.apiRequest.post(`api/deliveryinvoicenote`, payload);
  }

  putDeliveryinvoicenote(deliveryinvoicenote): Observable<any> {
    return this.apiRequest.put(`api/deliveryinvoicenote/${deliveryinvoicenote.id}`, deliveryinvoicenote);
  }


  deleteDeliveryinvoicenote(id): Observable<any> {
    return this.apiRequest.delete(`api/deliveryinvoicenote/${id}`);
  }

  deleteTnanddeleteupdaterequest(id): Observable<any> {
    return this.apiRequest.delete(`api/deliveryinvoicenote/delete/${id}`);
  }

  RejectDeliveryinvoicenote(deliveryinvoicenote): Observable<any> {
    return this.apiRequest.put(`api/deliveryinvoicenote/reject/${deliveryinvoicenote.id}`, deliveryinvoicenote);
  }


}
