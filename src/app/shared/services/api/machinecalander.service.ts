import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Enquiry } from 'app/shared/models/enquiry.model';
import { MachineCalander } from 'app/shared/models/machinecalander.model';

@Injectable({
  providedIn: 'root'
})
export class MachinecalanderService {
  
  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Company Records
     */
 getMachineCalanderList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/machinecalanders',params);

  }

  
  getMachineCalanderDetailsByID(cid: number):Observable<any>{
    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
   // params = params.append('id', cid);
    
    return this.apiRequest.get(`api/machinecalanders/${cid}`, params);
  }

  getMachineCalanderByMachineType(cid:string){

    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
   // params = params.append('id', cid);
    
    return this.apiRequest.get(`api/machinecalanders/machinetype/${cid}`, params);
  }


  postMachineCalander(machinecalander: MachineCalander):Observable<any> {

    return this.apiRequest.post(`api/machinecalanders`, machinecalander);
  }

  putMachineCalander(machinecalander: MachineCalander):Observable<any> {

    return this.apiRequest.put(`api/machinecalanders/${machinecalander.id}`, machinecalander);
  }


  deleteMachineCalanderByID(cid: number):Observable<any>{
    
    return this.apiRequest.delete(`api/machinecalanders/${cid}`);
  }

  addJob(mid:number,jid:number){

    return this.apiRequest.post(`api/machinecalanders/addjob/machinecalanderId/${mid}/jobcalanderId/${jid}`);

  }

  removeJob(mid:number,jid:number){

    return this.apiRequest.delete(`api/machinecalanders/removejob/machinecalanderId/${mid}/jobcalanderId/${jid}`);

  }



}
