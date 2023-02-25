import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LedgerreportService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }


  getLedgerreportbyitemcode(itemcode): Observable<any> {
    return this.apiRequest.get(`api/ledgerreports/${itemcode}`);
  }


  getJournalbyitemcode(itemcode): Observable<any> {
    return this.apiRequest.get(`api/ledgerreports/journal/${itemcode}`);
  }


  getJournallist(passbooksearchdata): Observable<any> {
    let params: HttpParams = new HttpParams();
   params = params.append('itemcode', passbooksearchdata.itemcode);
   params = params.append('accountid', passbooksearchdata.accountid);
   params = params.append('fromdate', passbooksearchdata.fromdate);
   params = params.append('todate', passbooksearchdata.todate);
   params = params.append('owner', passbooksearchdata.owner);
    console.log(params);
    return this.apiRequest.get('api/ledgerpassbooks', params);

  }

  postSupplierPending(payload): Observable<any> {
    return this.apiRequest.post(`api/ledgers/supplierpending`, payload);
  }


}
