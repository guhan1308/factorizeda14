import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpParams } from '@angular/common/http';
import { Interview } from 'app/shared/models/interview';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}
    /**
     * Gets List of Company Records
     */
    getInterviewList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/interviews',params);

  }

  getInterviewPendingList(interviewstatus):Observable<any> {

      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get(`api/interviewspending/${interviewstatus}` ,params);

  }

    getInterviewDetailsByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/interviews/${cid}`, params);
    }


    postInterview(interview: Interview):Observable<any> {

      return this.apiRequest.post(`api/interviews`, interview);
    }

    putInterview(interview: Interview):Observable<any> {

      return this.apiRequest.put(`api/interviews/${interview.id}`, interview);
    }


    deleteInterviewByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/interviews/${cid}`);
    }


}
