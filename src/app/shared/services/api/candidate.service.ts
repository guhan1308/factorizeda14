import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Candidate } from 'app/shared/models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Company Records
     */
    getCandidateList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/candidates',params);

  }

    getCandidateDetailsByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/candidates/${cid}`, params);
    }

    getCandidateDetailsByName(cname: string):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/candidates/?firstame=${cname}`, params);
    }

    getCountByMonth():Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/candidatescountbymonth`, params);
    }

    checkDuplicateEmail(email):Observable <any> {
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('email', email);

      return this.apiRequest.get(`api/candidates/email/${email}`, params);
    }

    postCandidate(candidate: Candidate):Observable<any> {

      return this.apiRequest.post(`api/candidates`, candidate);
    }

    putCandidate(candidate: Candidate):Observable<any> {

      return this.apiRequest.put(`api/candidates/${candidate.id}`, candidate);
    }


    deleteCandidateByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/candidates/${cid}`);
    }


}
