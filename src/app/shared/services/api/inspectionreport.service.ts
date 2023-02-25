import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

import { Inspectionreport } from 'app/shared/models/inspectionreport.model';
@Injectable({
  providedIn: 'root'
})
export class inspectionreportService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate: TranslateService
  ) { }



  getinspectionreport(): Observable<any> {

    return this.apiRequest.get(`api/inspectionreports`);
  }

  getinspectionreportbyid(id:number): Observable<any> {

    return this.apiRequest.get(`api/inspectionreports/${id}`);
  }


  postinspectionreport(payload): Observable<any> {

    return this.apiRequest.post(`api/inspectionreports`, payload);
  }


  putinspectionreport(Inspection: Inspectionreport): Observable<any> {

    return this.apiRequest.put(`api/inspectionreports/${Inspection.id}`, Inspection);
  }


  deleteinspectionreportByID(id: number): Observable<any> {

    return this.apiRequest.delete(`api/inspectionreports/${id}`);
  }


}
