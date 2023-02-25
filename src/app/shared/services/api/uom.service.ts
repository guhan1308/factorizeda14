import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UomService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getUoms(): Observable<any> {
    return this.apiRequest.get(`api/uoms`);
  }




}
