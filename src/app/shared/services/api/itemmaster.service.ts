import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

import { Itemmaster } from 'app/shared/models/itemmaster.model';
@Injectable({
  providedIn: 'root'
})
export class ItemmasterService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }



  getItemmaster(): Observable<any> {

    return this.apiRequest.get(`api/itemmasters`);
  }

  getItemmasterbyid(id:number): Observable<any> {

    return this.apiRequest.get(`api/itemmasters/${id}`);
  }

  getItemmasterbyitemcode(itemcode): Observable<any> {

    return this.apiRequest.get(`api/itemmasters/itemcode/${itemcode}`);
  }

  postItemmaster(Itemmaster: Itemmaster): Observable<any> {

    return this.apiRequest.post(`api/itemmasters`, Itemmaster);
  }

  putItemmaster(Itemmaster: Itemmaster): Observable<any> {

    return this.apiRequest.put(`api/itemmasters/${Itemmaster.id}`, Itemmaster);
  }


  deleteItemmasterByID(id: number): Observable<any> {

    return this.apiRequest.delete(`api/itemmasters/${id}`);
  }


}
