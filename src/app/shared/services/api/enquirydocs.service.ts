import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Enquirydocs } from 'app/shared/models/enquirydocs.model';

@Injectable({
  providedIn: 'root'
})
export class EnquirydocsService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
  ) {}

  
    getEnquiryDetailsByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
    // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/enquirydocs/${cid}`, params);
    }

    getEnquiryDocsByEnquiryID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
    // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/enquirydocs/enquiryid/${cid}`, params);
    }



    postEnquiryDocs(enquirydocs: Enquirydocs):Observable<any> {

      return this.apiRequest.post(`api/enquirydocs`, enquirydocs);
    }

    putEnquiryDocs(enquirydocs: Enquirydocs):Observable<any> {

      return this.apiRequest.put(`api/enquirydocs/${enquirydocs.id}`, enquirydocs);
    }


    deleteEnquiryByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/enquirydocs/${cid}`);
    }


}
