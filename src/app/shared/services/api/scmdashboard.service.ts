import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScmdashboardService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }



  getGrnEntries(querytype : string): Observable<any> {

    let params: HttpParams = new HttpParams();
    params = params.append('querytype', querytype);
    return this.apiRequest.get(`api/scmdashboard/grnentries`, params);
  }


  getNrdcEntries(querytype : string): Observable<any> {

    let params: HttpParams = new HttpParams();
    params = params.append('querytype', querytype);
    return this.apiRequest.get(`api/scmdashboard/nrdcentries`, params);
  }

  getRdcEntries(querytype : string): Observable<any> {

    let params: HttpParams = new HttpParams();
    params = params.append('querytype', querytype);
    return this.apiRequest.get(`api/scmdashboard/rdcentries`, params);
  }


  getDcEntries(querytype : string): Observable<any> {

    let params: HttpParams = new HttpParams();
    params = params.append('querytype', querytype);
    return this.apiRequest.get(`api/scmdashboard/Dcentries`, params);
  }


  getTransferrequests(querytype : string): Observable<any> {

    let params: HttpParams = new HttpParams();
    params = params.append('querytype', querytype);
    return this.apiRequest.get(`api/scmdashboard/transferrequests`, params);
  }

  getLotclearance(querytype : string): Observable<any> {

    let params: HttpParams = new HttpParams();
    params = params.append('querytype', querytype);
    return this.apiRequest.get(`api/scmdashboard/lotclearance`, params);
  }

  getGrnInfo(): Observable<any> {
    return this.apiRequest.get(`api/scmdashboard/grninfo`);
  }

}
