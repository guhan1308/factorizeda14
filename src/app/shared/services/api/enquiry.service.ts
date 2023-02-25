import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Enquiry } from 'app/shared/models/enquiry.model';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Company Records
     */
    getEnquiryList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/enquiry',params);

  }

    getEnquiryDetailsByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
    // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/enquiry/${cid}`, params);
    }

    getEnquiryDetailsByEnquiryID(enquiryid: string):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
    // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/enquiry/enquiryid/${enquiryid}`, params);

    }


    getEnquiryDocsByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
    // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/enquirydocs/enquiryid/${cid}`, params);
    }

    getEnquiryQuotesByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
    // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/enquiryquotes/enquiryid/${cid}`, params);
    }


    getCountByMonth():Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
    // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/enquirycountbymonth`, params);
    }


    postEnquiry(enquiry: Enquiry):Observable<any> {

      return this.apiRequest.post(`api/enquiry`, enquiry);
    }

    putEnquiry(enquiry: Enquiry):Observable<any> {

      return this.apiRequest.put(`api/enquiry/${enquiry.id}`, enquiry);
    }


    deleteEnquiryByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/enquiry/${cid}`);
    }


}



