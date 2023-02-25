import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from './translate.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Company } from 'app/shared/models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Company Records
     */
    getCompanyList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/companies',params);

  }

    getCompanyDetailsByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/companies/${cid}`, params);
    }

    getCompanyDetailsByName(cname: string):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/companies/?companyname=${cname}`, params);
    }

    postCompany(company: Company):Observable<any> {

      return this.apiRequest.post(`api/companies`, company);
    }

    putCompany(company: Company):Observable<any> {

      return this.apiRequest.put(`api/companies/${company.id}`, company);
    }


    deleteCompanyByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/companies/${cid}`);
    }


}
