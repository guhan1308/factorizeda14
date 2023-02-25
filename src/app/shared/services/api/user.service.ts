import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';
import { HttpParams } from '@angular/common/http';
import { User } from 'app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apiRequest: ApiRequestService,
) {}
    /**
     * Gets List of Company Records
     */
    getUserList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/auth/list',params);

  }

    getUserByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/auth/users/${cid}`, params);
    }


    putUser(user: User):Observable<any> {

      return this.apiRequest.put(`api/auth/users/${user.id}`, user);
    }


    deleteUserByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/auth/users/${cid}`);
    }

}