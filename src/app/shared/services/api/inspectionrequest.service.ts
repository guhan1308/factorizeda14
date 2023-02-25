import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

import { Inspectionrequest } from 'app/shared/models/inspectionrequest.model';
@Injectable({
  providedIn: 'root'
})
export class InspectionrequestService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }



  getInspectionrequest(): Observable<any> {

    return this.apiRequest.get(`api/inspectionrequests`);
  }


  getInspectionpendingrecords(): Observable<any> {

    return this.apiRequest.get(`api/inspectionrequests/pendingrecords`);
  }


  getInspectionrequestbyid(id:number): Observable<any> {

    return this.apiRequest.get(`api/inspectionrequests/${id}`);
  }

  getInspectionlotclearance(): Observable<any> {

    return this.apiRequest.get(`api/inspectionrequestsrecords`);
  }


  getInspectionparamsbyitem(data): Observable<any> {
    let params = new HttpParams();
   params = params.append('itemcode', data.itemcode);
   params = params.append('itemname', data.itemname);
    return this.apiRequest.get(`api/inspectionrequestsparams` , params);
  }

  updateInspectionrequest(payload): Observable<any> {

    return this.apiRequest.post(`api/inspectionrequests`, payload);
  }

  postInspectionrequest(payload): Observable<any> {

    console.log(payload);
    return this.apiRequest.post(`api/inspectionrequests`, payload);
  }



  putInspectionrequest(payload): Observable<any> {

    console.log(payload);
    return this.apiRequest.put(`api/inspectionrequests/${payload.inspectionRequest.id}`, payload);
  }


  deleteInspectionrequestByID(id: number): Observable<any> {

    return this.apiRequest.delete(`api/inspectionrequests/${id}`);
  }


  updateInspectionrequestStatus(payload): Observable<any> {

    console.log(payload);
    return this.apiRequest.put(`api/inspectionrequests/update/${payload.id}`, payload);
  }

}
