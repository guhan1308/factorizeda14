import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { EmployeeTraining } from 'app/shared/models/employeetraining.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeetrainingService {

  constructor(
    private apiRequest: ApiRequestService,
    private translate:TranslateService
) {}

    /**
     * Gets List of Project Records
     */
    getTranineesList(): Observable<any> {
      //Create Request URL params
      let me = this;
      let page= 0;
      let size = 5;
      let params: HttpParams = new HttpParams();
      params = params.append('page', typeof page === "number"? page.toString():"0");
      params = params.append('size', typeof size === "number"? size.toString():"1000");
      return this.apiRequest.get('api/employeetrainings',params);

  }

  


    postTrainee(employeetraining: EmployeeTraining):Observable<any> {

      return this.apiRequest.post(`api/employeetrainings`, employeetraining);
    }

    putTrainee(employeetraining: EmployeeTraining):Observable<any> {

      return this.apiRequest.put(`api/employeetrainings/${employeetraining.id}`, employeetraining);
    }


    deleteTraineeByID(cid: number):Observable<any>{
      
      return this.apiRequest.delete(`api/employeetrainings/${cid}`);
    }

}
