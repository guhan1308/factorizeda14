import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Enquiry } from 'app/shared/models/enquiry.model';
import { FGStock } from 'app/shared/models/fgstock.model';

@Injectable({
  providedIn: 'root'
})
export class FGStockService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of FGStock Records
     */
    getFGStockList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/fgstock',params);

  }

    getFGStockById(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
    // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/fgstock/${cid}`, params);
    }

    getFGStockByPartNo(partno: string):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
    // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/fgstock/partno/${partno}`, params);

    }

    getFGStockByPartId(partid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
    // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/fgstock/partid/${partid}`, params);

    }



  postFGStock(fgstock: FGStock):Observable<any> {

      return this.apiRequest.post(`api/fgstock`, fgstock);
    }

  putFGStock(fgstock: FGStock):Observable<any> {

      return this.apiRequest.put(`api/fgstock/${fgstock.id}`, fgstock);
    }


  deleteFGStockByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/fgstock/${cid}`);
    }

}
