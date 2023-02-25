import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Jobdescription } from 'app/shared/models/jobdescription.model';

@Injectable({
  providedIn: 'root'
})
export class JobdescriptionService {
  
  
  
  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Company Records
     */
    getJobdescriptionList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/jobdescriptions',params);

  }

    getJobdescriptionByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/jobdescriptions/${cid}`, params);
    }

    getJobdescriptionDetailsByProcessName(processname: string):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/jobdescriptions/processname/${processname}`, params);
    }


    postJobdescription(jobdescription: Jobdescription):Observable<any> {

      return this.apiRequest.post(`api/jobdescriptions`, jobdescription);
    }

    putJobdescription(jobdescription: Jobdescription):Observable<any> {

      return this.apiRequest.put(`api/jobdescriptions/${jobdescription.id}`, jobdescription);
    }


    deleteJobdescriptionByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/jobdescriptions/${cid}`);
    }

}
