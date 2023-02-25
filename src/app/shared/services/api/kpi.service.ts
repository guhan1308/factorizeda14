import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KpiService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}
  



getAllKPIGroups(process: string):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/kpis/count/process/${process}`, params);

}


  getAllKPIItems(process: string):Observable<any>{

    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
   // params = params.append('id', cid);
    
    return this.apiRequest.get(`api/kpis/items/process/${process}`, params);

  }

  getKPIItems(process: string, kpigroup: string):Observable<any>{

    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
   // params = params.append('id', cid);
    
    return this.apiRequest.get(`api/kpis/process/${process}/kpigroup/${kpigroup}`, params);

  }




}

