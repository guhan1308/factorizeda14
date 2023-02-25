import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NrdeliverynoteService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }


    
  getnrdeliverynotes(): Observable<any> {
    return this.apiRequest.get(`api/nrdeliverynotes`);
  }
  

  getnrdeliverynotesraisedrecords(): Observable<any> {
    return this.apiRequest.get(`api/nrdeliverynotes_raisedrecords`);
  }



  getnrdeliverynotebyid(txnno): Observable<any> {
    return this.apiRequest.get(`api/nrdeliverynotes/${txnno}`);
  }

  getitemsbyitemtype(payload): Observable<any> {
    return this.apiRequest.post(`api/nrdeliverynotes/searchItem`, payload);
  }


  gettnbytxnno(txnno): Observable<any> {
    return this.apiRequest.get(`api/nrdeliverynotes/txnno/${txnno}`);
  }

  postNrdeliverynote(payload): Observable<any> {
    return this.apiRequest.post(`api/nrdeliverynotes`, payload);
  }

  putNrdeliverynote(nrdeliverynote): Observable<any> {
    return this.apiRequest.put(`api/nrdeliverynotes/${nrdeliverynote.id}`, nrdeliverynote);
  }


  deleteNrdeliverynote(id): Observable<any> {
    return this.apiRequest.delete(`api/nrdeliverynotes/${id}`);
  }

  deleteTnanddeleteupdaterequest(id): Observable<any> {
    return this.apiRequest.delete(`api/nrdeliverynotes/delete/${id}`);
  }

  RejectNrdeliverynote(nrdeliverynote): Observable<any> {
    return this.apiRequest.put(`api/nrdeliverynotes/reject/${nrdeliverynote.id}`, nrdeliverynote);
  }


}
