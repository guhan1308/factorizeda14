import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Npdbudget } from 'app/shared/models/npdproject.model';

@Injectable({
  providedIn: 'root'
})
export class NpdbudgetService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Project Records
     */
    getNpdBudgetList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/npdbudgets',params);

  }

    getNpdBudgettDetailsByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/npdbudgets/${cid}`, params);
    }


    postNpdBudget(npdbudget: Npdbudget):Observable<any> {

      return this.apiRequest.post(`api/npdbudgets`, npdbudget);
    }

    putNpdBudget(npdbudget: Npdbudget):Observable<any> {

      return this.apiRequest.put(`api/npdbudgets/${npdbudget.id}`, npdbudget);
    }


    deleteNpdBudgetByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/npdbudgets/${cid}`);
    }

}
