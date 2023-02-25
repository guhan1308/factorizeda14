import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebitnoteService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }


    
  getdebitnotes(): Observable<any> {
    return this.apiRequest.get(`api/debitnotes`);
  }
  
  getdebitnotebyid(txnno): Observable<any> {
    return this.apiRequest.get(`api/debitnotes/${txnno}`);
  }



  postDebitnote(payload): Observable<any> {
    return this.apiRequest.post(`api/debitnotes`, payload);
  }

  putDebitnote(debitnote): Observable<any> {
    return this.apiRequest.put(`api/debitnotes/${debitnote.id}`, debitnote);
  }


  deleteDebitnote(id): Observable<any> {
    return this.apiRequest.delete(`api/debitnotes/${id}`);
  }

 


}
