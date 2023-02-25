import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReturndeliverynoteService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }


    
  getreturndeliverynotes(): Observable<any> {
    return this.apiRequest.get(`api/returndeliverynotes`);
  }

  getreturndeliverynotesraisedrecords(): Observable<any> {
    return this.apiRequest.get(`api/returndeliverynotes_raisedrecords`);
  }

  
  getreturndeliverynotebyid(txnno): Observable<any> {
    return this.apiRequest.get(`api/returndeliverynotes/${txnno}`);
  }

  getitemsbyitemtype(payload): Observable<any> {
    return this.apiRequest.post(`api/returndeliverynotes/searchItem`, payload);
  }


  gettnbytxnno(txnno): Observable<any> {
    return this.apiRequest.get(`api/returndeliverynotes/txnno/${txnno}`);
  }

  postReturndeliverynote(payload): Observable<any> {
    return this.apiRequest.post(`api/returndeliverynotes`, payload);
  }

  putReturndeliverynote(returndeliverynote): Observable<any> {
    return this.apiRequest.put(`api/returndeliverynotes/${returndeliverynote.id}`, returndeliverynote);
  }


  deleteReturndeliverynote(id): Observable<any> {
    return this.apiRequest.delete(`api/returndeliverynotes/${id}`);
  }

  deleteTnanddeleteupdaterequest(id): Observable<any> {
    return this.apiRequest.delete(`api/returndeliverynotes/delete/${id}`);
  }

  RejectReturndeliverynote(returndeliverynote): Observable<any> {
    return this.apiRequest.put(`api/returndeliverynotes/reject/${returndeliverynote.id}`, returndeliverynote);
  }


}
