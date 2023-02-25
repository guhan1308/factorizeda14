import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfernoteService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }


    
  gettransfernotes(): Observable<any> {
    return this.apiRequest.get(`api/transfernotes`);
  }
  
  gettransfernotebyid(txnno): Observable<any> {
    return this.apiRequest.get(`api/transfernotes/${txnno}`);
  }

  getitemsbyitemtype(payload): Observable<any> {
    return this.apiRequest.post(`api/transfernotes/searchItem`, payload);
  }


  gettnbytxnno(txnno): Observable<any> {
    return this.apiRequest.get(`api/transfernotes/txnno/${txnno}`);
  }

  postTransfernote(payload): Observable<any> {
    return this.apiRequest.post(`api/transfernotes`, payload);
  }

  putTransfernote(transfernote): Observable<any> {
    return this.apiRequest.put(`api/transfernotes/${transfernote.id}`, transfernote);
  }


  deleteTransfernote(id): Observable<any> {
    return this.apiRequest.delete(`api/transfernotes/${id}`);
  }

  deleteTnanddeleteupdaterequest(id): Observable<any> {
    return this.apiRequest.delete(`api/transfernotes/delete/${id}`);
  }

  RejectTransfernote(transfernote): Observable<any> {
    return this.apiRequest.put(`api/transfernotes/reject/${transfernote.id}`, transfernote);
  }


}
