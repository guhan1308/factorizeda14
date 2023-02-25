import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Qmskpi } from 'app/shared/models/qmskpi';

@Injectable({
  providedIn: 'root'
})
export class QmskpiService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

getKPIGroups(process: string):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/qmskpis/process/${process}`, params);

}

getKPIItems(process: string, kpigroup: string):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/qmskpis/process/${process}/kpigroup/${kpigroup}`, params);

}


getAllKPIItems(process: string):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/qmskpis/items/process/${process}`, params);

}


postQmskpi(qmskpi: Qmskpi):Observable<any> {

  return this.apiRequest.post(`api/qmskpis`, qmskpi);
}

putQmskpi(qmskpi: Qmskpi):Observable<any> {

  return this.apiRequest.put(`api/qmskpis/${qmskpi.id}`, qmskpi);
}


deleteQmskpiByID(cid: number):Observable<any>{
  
  return this.apiRequest.delete(`api/qmskpis/${cid}`);
}


}
