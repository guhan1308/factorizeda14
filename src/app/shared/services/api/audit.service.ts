import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Audit } from 'app/shared/models/audit.model';
import { AuditDetail } from 'app/shared/models/AuditDetail.model';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Company Records
     */
    getAuditList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/audits',params);

  }

    getAuditsDetailsByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/audits/${cid}`, params);
    }

  
    postNCByAuditId(auditId:number, auditDetail: AuditDetail):Observable<any> {

      return this.apiRequest.post(`api/audits/auditid/${auditId}/addNC`, auditDetail);
    } 


    deleteNCByID(auditId:number,ncId: number):Observable<any>{
      
      return this.apiRequest.delete(`api/audits/auditid/${auditId}/removeNC/ncid/${ncId}`);
    }

    postAudit(audit: Audit):Observable<any> {

      return this.apiRequest.post(`api/audits`, audit);
    }

    putAudit(audit: Audit):Observable<any> {

      return this.apiRequest.put(`api/audits/${audit.id}`, audit);
    }


    putAuditDetails(auditdetail: AuditDetail):Observable<any> {

      return this.apiRequest.put(`api/auditdetails/${auditdetail.id}`, auditdetail);
    }

    deleteAuditByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/audits/${cid}`);
    }
}
