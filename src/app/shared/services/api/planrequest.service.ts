import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Npdproject } from 'app/shared/models/npdproject.model';
import { PlanRequest } from 'app/shared/models/planrequest.model';

@Injectable({
  providedIn: 'root'
})
export class PlanrequestService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Project Records
     */
    getPlanRequests(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/planrequests',params);

  }

  getPlanRequestByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/planrequests/${cid}`, params);
    }

  postPlanRequest(planrequest: PlanRequest):Observable<any> {

      return this.apiRequest.post(`api/planrequests`, planrequest);
    }

  putPlanRequest(planrequest: PlanRequest):Observable<any> {

      return this.apiRequest.put(`api/planrequests/${planrequest.id}`, planrequest);
    }


  deletePlanRequestByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/planrequests/${cid}`);
    }
}
