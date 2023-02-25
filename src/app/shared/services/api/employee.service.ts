import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Employee } from 'app/shared/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Company Records
     */
    getEmployeeList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/employees',params);

  }

    getEmployeesDetailsByID(cid: number):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/employees/${cid}`, params);
    }

    getEmployeesDetailsByName(cname: string):Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/employees/?firstame=${cname}`, params);
    }

    getCountByMonth():Observable<any>{
      let me = this;
      let page= 0;
      let size = 5;
      let params = new HttpParams();
     // params = params.append('id', cid);
      
      return this.apiRequest.get(`api/employeescountbymonth`, params);
    }



    postEmployee(employee: Employee):Observable<any> {

      return this.apiRequest.post(`api/employees`, employee);
    }

    putEmployee(employee: Employee):Observable<any> {

      return this.apiRequest.put(`api/employees/${employee.id}`, employee);
    }


    deleteEmployeeByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/employees/${cid}`);
    }


}
