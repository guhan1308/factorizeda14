import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
      private apiRequest: ApiRequestService,
      private translate:TranslateService,
      private http: HttpClient
  ) {}

  getFilesList() : Observable<any> {

        //Create Request URL params
        let me = this;
        let page= 0;
        let size = 5;
        let params: HttpParams = new HttpParams();
        params = params.append('page', typeof page === "number"? page.toString():"0");
        params = params.append('size', typeof size === "number"? size.toString():"1000");
        return this.apiRequest.get('api/files',params);
    
  }

/*
  uploadFile(fname): Observable<any> {

  }
*/

  downloadFile(fname): any {
    console.log("Downloading file "+ fname);
    return this.http.get(`http://localhost:8080/api/files/${fname}`, {responseType: 'blob'});
  }
  

  processFile():any {
    let me = this;
    let page= 0;
    let size = 5;
    let params: HttpParams = new HttpParams();
    params = params.append('page', typeof page === "number"? page.toString():"0");
    params = params.append('size', typeof size === "number"? size.toString():"1000");
    return this.apiRequest.post('api/processfile',params);
  }
}
