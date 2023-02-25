import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Jobcalander } from 'app/shared/models/jobcalander.model';
import { JobcalanderIHQCReport } from 'app/shared/models/JobcalanderIHQCRreport.model';

@Injectable({
  providedIn: 'root'
})
export class JobcalanderService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Company Records
     */
  getJobCalanderList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/jobcalanders',params);


  }

  getJobCalanderDetailsByID(cid: number):Observable<any>{
    let me = this;
    let page= 0;
    let size = 5;
    let params = new HttpParams();
   // params = params.append('id', cid);
    
    return this.apiRequest.get(`api/jobcalanders/${cid}`, params);
  }

  getJobCalanderListBySalesOrderNo(salesorderno:string, partid:number): Observable<any> {

    let me = this;
    let page= 0;
    let size = 5;
    let params: HttpParams = new HttpParams();
    params = params.append('page', typeof page === "number"? page.toString():"0");
    params = params.append('size', typeof size === "number"? size.toString():"1000");
 
    return this.apiRequest.get(`api/jobcalanders/salesordeno/${salesorderno}/partid/${partid}`,params);

  }


  postJobCalander(jobcalander: Jobcalander):Observable<any> {

    return this.apiRequest.post(`api/jobcalanders`, jobcalander);
  }

  postJobcalanderIHQCReport(jobcalander: Jobcalander, jobcalanderIHQCReport: JobcalanderIHQCReport){

    return this.apiRequest.post(`api/jobcalanders/jobcalanderId/${jobcalander.id}/createihqcreport`, jobcalanderIHQCReport);

    
    
  }

  putJobCalander(jobcalander: Jobcalander):Observable<any> {

    return this.apiRequest.put(`api/jobcalanders/${jobcalander.id}`, jobcalander);
  }

  putJobcalanderIHQCReport(jobcalander: Jobcalander, jobcalanderIHQCReport: JobcalanderIHQCReport):Observable<any> {

    return this.apiRequest.put(`api/jobcalanders/jobcalanderId/${jobcalander.id}/updateihqcreport/${jobcalanderIHQCReport.id}`, jobcalanderIHQCReport);
  }


  deleteJobCalanderByID(cid: number):Observable<any>{
    
    return this.apiRequest.delete(`api/jobcalanders/${cid}`);
                    
  }

  addMachine(mid:number,jid:number){

    return this.apiRequest.post(`api/jobcalanders/addmachine/jobcalanderId/${jid}/machinecalanderId/${mid}`);

  }

  removeMachine(mid:number,jid:number){

    return this.apiRequest.delete(`api/jobcalanders/removemachine/jobcalanderId/${jid}/machinecalanderId/${mid}`);

  }

}
