import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

import { Stockledger } from 'app/shared/models/stockledger.model';
@Injectable({
  providedIn: 'root'
})
export class StockledgerService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }


  getStockledger(): Observable<any> {
    return this.apiRequest.get(`api/rejectionstockledgers`);
  }

  getStockledgerbyId(id): Observable<any> {
    return this.apiRequest.get(`api/rejectionstockledgers/${id}`);
  }

  postStockledger(Stockledger: Stockledger): Observable<any> {
    return this.apiRequest.post(`api/rejectionstockledgers`, Stockledger);
  }


  putStockledger(Stockledger: Stockledger): Observable<any> {
    return this.apiRequest.put(`api/rejectionstockledgers/${Stockledger.id}`, Stockledger);
  }

  deleteStockledgerbyId(cid: number): Observable<any> {
    return this.apiRequest.delete(`api/rejectionstockledgers/${cid}`);
  }

}
