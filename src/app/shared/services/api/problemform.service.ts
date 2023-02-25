import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ProblemForm } from 'app/shared/models/problemform';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProblemformService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

  getProblemFormDetailsByProblemid(cid: string):Observable<any>{
    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
  // params = params.append('id', cid);
    
    return this.apiRequest.get(`api/problemforms/problemid/${cid}`, params);
  }

  getProblemFormDetailsById(cid: number):Observable<any>{
    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
  // params = params.append('id', cid);
    
    return this.apiRequest.get(`api/problemforms/${cid}`, params);
  }


  postIncident(problemform: ProblemForm):Observable<any> {

    return this.apiRequest.post(`api/problemforms`, problemform);
  }

  putIncident(problemform: ProblemForm):Observable<any> {

    return this.apiRequest.put(`api/problemforms/${problemform.id}`, problemform);
  }


  deleteIncidentByID(cid: number):Observable<any>{
    
    return this.apiRequest.delete(`api/incidents/${cid}`);
  }



}
