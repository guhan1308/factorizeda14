import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { Accountsmaster } from 'app/shared/models/accountsmaster.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsmasterService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getAccountsowner(): Observable<any> {
    return this.apiRequest.get(`api/accountsmasters`);
  }
  
  getaccountsownerbyid(cid): Observable<any> {
    return this.apiRequest.get(`api/accountsmasters/${cid}`);
  }

  postAccountsmaster(payload : Accountsmaster): Observable<any> {
    return this.apiRequest.post(`api/accountsmasters`, payload);
  }

  putAccountsmaster(accountsmaster : Accountsmaster): Observable<any> {
    return this.apiRequest.put(`api/accountsmasters/${accountsmaster.id}`, accountsmaster);
  }


  deleteAccountsmaster(id): Observable<any> {
    return this.apiRequest.delete(`api/accountsmasters/${id}`);
  }


  searchItem(item):Observable<any> {
    return this.apiRequest.post(`api/searchitem`, item);
  }

}
