import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationsflowService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}


getOperationsWorkflowsList():Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/operationsflows`, params);

}

getOperationsWorkflowById(cid: number):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/operationsflows/${cid}`, params);

}

getOperationsWorkflowByPartName(partname: string):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/operationsflows/partname/${partname}`, params);

}


getOperationsWorkflowByPartNo(partno: string):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/operationsflows/partno/${partno}`, params);

}

getJobList(cid: number):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/operationsflowsjobs/operationflowid/${cid}`, params);

}

getItemList(cid: number):Observable<any>{

  let me = this;
  let page= 0;
  let size = 5;
  let params = new HttpParams();
 // params = params.append('id', cid);
  
  return this.apiRequest.get(`api/operationsflowsjobitems/operationflowjobid/${cid}`, params);
  
  
}



/*
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

*/


}
