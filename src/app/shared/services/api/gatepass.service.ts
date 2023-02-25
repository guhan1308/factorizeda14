import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Audit } from 'app/shared/models/audit.model';
import { AuditDetail } from 'app/shared/models/AuditDetail.model';
import { Gatepass } from 'app/shared/models/gatepass.model';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class GatepassService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }

  /**
   * Gets List of Company Records
   */
  getGatepassList(): Observable<any> {
    //Create Request URL params
    let me = this;
    let page = 0;
    let size = 5;
    let params: HttpParams = new HttpParams();
    params = params.append('page', typeof page === "number" ? page.toString() : "0");
    params = params.append('size', typeof size === "number" ? size.toString() : "1000");
    return this.apiRequest.get('api/gatepass', params);

  }

  getGatepassDetailsByID(cid: number): Observable<any> {
    let me = this;
    let page = 0;
    let size = 5;
    let params = new HttpParams();
    // params = params.append('id', cid);

    return this.apiRequest.get(`api/gatepass/${cid}`, params);
  }


  postGatepassDetailsByGatepassId(gatepassId: number, auditDetail: AuditDetail): Observable<any> {

    return this.apiRequest.post(`api/gatepass/gatepassid/${gatepassId}/addRawMaterialStock`, auditDetail);
  }


  deleteRawMaterialStockByGatepassId(gatepassId: number, rawMaterialStockId: number): Observable<any> {

    return this.apiRequest.delete(`api/gatepass/gatepassid/${gatepassId}/removeNC/r/${rawMaterialStockId}`);
  }


  postGatepass(gatepass: Gatepass): Observable<any> {

    return this.apiRequest.post(`api/gatepass`, gatepass);
  }



  putGatepass(gatepass: Gatepass): Observable<any> {

    return this.apiRequest.put(`api/gatepass/${gatepass.id}`, gatepass);
  }


  deleteAuditByID(cid: number): Observable<any> {

    return this.apiRequest.delete(`api/audits/${cid}`);
  }

}
