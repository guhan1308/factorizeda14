import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  constructor(
    private apiRequest: ApiRequestService,
  ) {}

  postInstrument(postBody: any):Observable<any> {
     return this.apiRequest.post('api/instrument', postBody);
  }

  getInstrumentList(): Observable<any> {
    return this.apiRequest.get('api/instruments');
  }

  getInstrumentDetail(ID): Observable<any> {
    return this.apiRequest.get('api/instrument/'+ID);
  }

  updateInstrument(ID, postBody: any): Observable<any> {
    return this.apiRequest.put('api/instrument/'+ID, postBody);
  }

  deleteInstrument(ID): Observable<any> {
    return this.apiRequest.delete('api/instrument/'+ID);
  }

}