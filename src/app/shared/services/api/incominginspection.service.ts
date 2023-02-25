import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncominginspectionService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getMachinesbyitemid(itemid : number): Observable<any> {
    return this.apiRequest.get(`api/incominginspection/itemmasterid/${itemid}`);
  }




}
