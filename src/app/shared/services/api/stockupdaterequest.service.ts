import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

import { Stockupdaterequest } from 'app/shared/models/stockupdaterequest.model';
@Injectable({
  providedIn: 'root'
})
export class StockupdaterequestService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }


  getStockupdaterequest(): Observable<any> {
    return this.apiRequest.get(`api/stockupdaterequests`);
  }

  getStockupdaterequestbyId(id): Observable<any> {
    return this.apiRequest.get(`api/stockupdaterequests/${id}`);
  }

  postStockupdaterequest(Stockupdaterequest: Stockupdaterequest): Observable<any> {
    return this.apiRequest.post(`api/stockupdaterequests`, Stockupdaterequest);
  }


  putStockupdaterequest(Stockupdaterequest: Stockupdaterequest): Observable<any> {
    return this.apiRequest.put(`api/stockupdaterequests/${Stockupdaterequest.id}`, Stockupdaterequest);
  }

  updateStockandledger(id): Observable<any> {
    return this.apiRequest.post(`api/stockupdaterequests/updatestockandLedger/${id}`);
  }


  deleteStockupdaterequestbyId(cid: number): Observable<any> {
    return this.apiRequest.delete(`api/stockupdaterequests/${cid}`);
  }

}
