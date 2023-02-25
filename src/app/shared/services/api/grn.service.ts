import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Audit } from 'app/shared/models/audit.model';
import { AuditDetail } from 'app/shared/models/AuditDetail.model';
import { Grn } from 'app/shared/models/grn.model';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class GrnService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }

  /**
   * Gets List of Company Records
   */
  getGRNList(): Observable<any> {
    //Create Request URL params
    let me = this;
    let page = 0;
    let size = 5;
    let params: HttpParams = new HttpParams();
    params = params.append('page', typeof page === "number" ? page.toString() : "0");
    params = params.append('size', typeof size === "number" ? size.toString() : "1000");
    return this.apiRequest.get('api/grns', params);

  }

  getGRNDetailsByID(cid: number): Observable<any> {
    let me = this;
    let page = 0;
    let size = 5;
    let params = new HttpParams();
    // params = params.append('id', cid);

    return this.apiRequest.get(`api/grns/${cid}`, params);
  }

  getGRNrasiedRecords(): Observable<any> {
    return this.apiRequest.get('api/grnsraisedrecords');

  }


  postGRNDetailsByGRNId(grnId: number, auditDetail: AuditDetail): Observable<any> {

    return this.apiRequest.post(`api/grns/grnid/${grnId}/addRawMaterialStock`, auditDetail);
  }


  deleteRawMaterialStockByGRNId(grnId: number, rawMaterialStockId: number): Observable<any> {

    return this.apiRequest.delete(`api/grns/grnid/${grnId}/removeNC/r/${rawMaterialStockId}`);
  }


  postGRN(grn: Grn): Observable<any> {

    return this.apiRequest.post(`api/grns`, grn);
  }



  putGRN(grn: Grn): Observable<any> {

    return this.apiRequest.put(`api/grns/${grn.id}`, grn);
  }


  put(auditdetail: AuditDetail): Observable<any> {

    return this.apiRequest.put(`api/auditdetails/${auditdetail.id}`, auditdetail);
  }

  deleteAuditByID(cid: number): Observable<any> {

    return this.apiRequest.delete(`api/audits/${cid}`);
  }

}
