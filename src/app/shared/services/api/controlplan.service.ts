import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControlplanService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}


getControlPlanList():Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/controlplans`, params);

}

getControlPlanByName(partname: string):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/controlplans/partname/${partname}`, params);

}

getControlPlanById(cid: number):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/controlplans/${cid}`, params);

}


getCPProcessesByControlPlanId(cid: number):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/controlplanprocesses/controlplanid/${cid}`, params);

}



getCPHeadersByProcessId(cid: number):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/cpheaders/cpprocessid/${cid}`, params);

}


getCPElementsByHeaderId(cid: number):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/cpelements/cpheaderid/${cid}`, params);

}

getCPElementGroupsByHeaderId(cid: number):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/cpelementgroups/cpheaderid/${cid}`, params);

}

getCPElementItemsByGroupId(cid: number):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/cpelementgroupitems/${cid}`, params);

}

getCPElementGroupItemsByGroupId(cid: number):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/cpelementgroupitems/cpelementgroupid/${cid}`, params);

}




}
