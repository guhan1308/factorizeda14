import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Incident } from 'app/shared/models/incident.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Company Records
     */
    getAllIncidents(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
     // params = params.append('page', typeof page === "number"? page.toString():"0");
    //  params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/incidents',params);

  }

  getAllActiveIncidents(): Observable<any> {
    //Create Request URL params
    let me = this;
    let page= 0;
    let size = 5;
    let params: HttpParams = new HttpParams();
   // params = params.append('page', typeof page === "number"? page.toString():"0");
  //  params = params.append('size', typeof size === "number"? size.toString():"1000");
    return this.apiRequest.get('api/incidents/notbystatus/CLOSED',params);

}

getClosedIncidents(): Observable<any> {
  //Create Request URL params
  let me = this;
  let page= 0;
  let size = 5;
  let params: HttpParams = new HttpParams();
 // params = params.append('page', typeof page === "number"? page.toString():"0");
//  params = params.append('size', typeof size === "number"? size.toString():"1000");
  return this.apiRequest.get('api/incidents/bystatus/CLOSED',params);

}


  
  getAllIncidentsBy(): Observable<any> {
    //Create Request URL params
    let me = this;
    let page= 0;
    let size = 5;
    let params: HttpParams = new HttpParams();
   // params = params.append('page', typeof page === "number"? page.toString():"0");
  //  params = params.append('size', typeof size === "number"? size.toString():"1000");
    return this.apiRequest.get('api/incidents',params);

}


  getAllIncidentsByAssignedToMyGroup(cid:string): Observable<any> {
    //Create Request URL params
    let me = this;
    let page= 0;
    let size = 5;
    let params: HttpParams = new HttpParams();
   // params = params.append('page', typeof page === "number"? page.toString():"0");
  //  params = params.append('size', typeof size === "number"? size.toString():"1000");
    return this.apiRequest.get(`api/incidents/assignedtogroup/${cid}`, params);

}

getAllIncidentsByOwnedByMyGroup(cid:string): Observable<any> {
  //Create Request URL params
  let me = this;
  let page= 0;
  let size = 5;
  let params: HttpParams = new HttpParams();
 // params = params.append('page', typeof page === "number"? page.toString():"0");
//  params = params.append('size', typeof size === "number"? size.toString():"1000");
  return this.apiRequest.get(`api/incidents/owner/${cid}`, params);

}


    getIncidentDetailsByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/incidents/${cid}`, params);
    }





    postIncident(incident: Incident):Observable<any> {

      return this.apiRequest.post(`api/incidents`, incident);
    }

    putIncident(incident: Incident):Observable<any> {

      return this.apiRequest.put(`api/incidents/${incident.id}`, incident);
    }


    deleteIncidentByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/incidents/${cid}`);
    }


}
