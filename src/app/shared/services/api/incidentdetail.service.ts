import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Incident } from 'app/shared/models/incident.model';
import { IncidentDetail } from 'app/shared/models/incidentdetail.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentDetailService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    getIncidentDetailByIncidentid(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      return this.apiRequest.get(`api/incidentdetails/incidentid/${cid}`, params);
    }


    postIncidentDetail(incidentdetail: IncidentDetail):Observable<any> {

      return this.apiRequest.post(`api/incidentdetails`, incidentdetail);
    }

    putIncident(incidentdetail: IncidentDetail):Observable<any> {

      return this.apiRequest.put(`api/incidentdetails/${incidentdetail.id}`, incidentdetail);
    }


    deleteIncidentByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/incidentdetails/${cid}`);
    }


}
