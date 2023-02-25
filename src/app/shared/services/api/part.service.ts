import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { Observable } from 'rxjs';
import { ProblemForm } from 'app/shared/models/problemform';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(
    private apiRequest: ApiRequestService
) {}

    createContainer(payload:any):Observable<any> {
        return this.apiRequest.post(`api/containers`, payload);
    }

    listContainers(): Observable<any> {
        return this.apiRequest.get('api/containers');
    }

    listAllContainers(): Observable<any> {
        return this.apiRequest.get('api/containermaster');
    }

    listQCContainers(): Observable<any> {
        return this.apiRequest.get('api/getqccontainers');
    }

    getContainer(ID): Observable<any> {
        return this.apiRequest.get('api/containers/'+ID);
    }

    getContainerType(ID): Observable<any> {
        return this.apiRequest.get('api/containertype/'+ID);
    }

    updateContainer(id, payload):Observable<any> {
        return this.apiRequest.put(`api/containers/${id}`, payload);
    }

    createOrder(payload:any):Observable<any> {
        return this.apiRequest.post(`api/orders`, payload);
    }

    listOrders(): Observable<any> {
        return this.apiRequest.get('api/orders');
    }

    addSubpart(containerID, payload:any):Observable<any> {
        return this.apiRequest.post(`api/containers/${containerID}/addParts`, payload);
    }

    removeSubPart(partID):Observable<any> {
        return this.apiRequest.delete(`api/containers/removesubpart/${partID}`);
    }

    getOrder(ID): Observable<any> {
        return this.apiRequest.get('api/order/'+ID);
    }

    updateOrder(id, payload):Observable<any> {
        return this.apiRequest.put(`api/order/${id}`, payload);
    }

    addConsignment(payload, id):Observable<any> {
        return this.apiRequest.post(`api/order/${id}/addconsignment`, payload);
    }

    getConsignment(ID): Observable<any> {
        return this.apiRequest.get('api/consignment/'+ID);
    }

    updateConsignment(payload, id):Observable<any> {
        return this.apiRequest.put(`api/consignment/${id}`, payload);
    }

    createDispatchOrder(payload, id):Observable<any> {
        return this.apiRequest.post(`api/dispatch/${id}`, payload);
    }

    createVehicle(payload):Observable<any> {
        return this.apiRequest.post(`api/vehicle`, payload);
    }

    listVehicles(): Observable<any> {
        return this.apiRequest.get('api/vehicles');
    }

    getVehicle(id): Observable<any> {
        return this.apiRequest.get(`api/vehicle/${id}`);
    }

    updateVehicle(payload, id):Observable<any> {
        return this.apiRequest.put(`api/vehicle/${id}`, payload);
    }

    getOrderConsignmentDetails(ID): Observable<any> {
        return this.apiRequest.get('api/consignmentdetails/'+ID);
    }

    getDeliveryQueue(): Observable<any> {
        return this.apiRequest.get('api/deliveryqueue');
    }

    getReceivedQueue(): Observable<any> {
        return this.apiRequest.get('api/receivequeue');
    }

    getDispatchQueue(): Observable<any> {
        return this.apiRequest.get('api/dispatchqueue');
    }

    getTransitConsignment(ID): Observable<any> {
        return this.apiRequest.get('api/gettransitconsignment/'+ID);
    }

    getAllConsignments(): Observable<any> {
        return this.apiRequest.get('api/getallconsignments');
    }

    deliveredConsignment(payload, id):Observable<any> {
        return this.apiRequest.put(`api/delivered/${id}`, payload);
    }

    getReleaseContainerQueue(): Observable<any> {
        return this.apiRequest.get('api/releasecontainerqueue');
    }

    receivedConsignment(payload, id):Observable<any> {
        return this.apiRequest.put(`api/received/${id}`, payload);
    }

    releaseContainers(data): Observable<any> {
        return this.apiRequest.put('api/releasecontainers/'+data.id, data);
    }

    createReturnConsignment(payload):Observable<any> {
        return this.apiRequest.post(`api/createreturnconsignment`, payload);
    }

    sendToQC(data): Observable<any> {
        return this.apiRequest.put('api/raiseQC/'+data.id, data);
    }

    getContainerFromQR(qrcode): Observable<any> {
        return this.apiRequest.get(`api/fetchcontainer/${qrcode}`);
    }

    createContainerType(payload:any):Observable<any> {
        return this.apiRequest.post(`api/containertype`, payload);
    }

    listContainerTypes():Observable<any> {
        return this.apiRequest.get(`api/containertypes`);
    }

    generateContainerMaster(payload:any):Observable<any> {
        return this.apiRequest.post(`api/generatecontainers`, payload);
    }

    createRoute(payload:any):Observable<any> {
        return this.apiRequest.post(`api/route`, payload);
    }

    listRoutes(): Observable<any> {
        return this.apiRequest.get('api/routes');
    }

    getRoute(routeid): Observable<any> {
        return this.apiRequest.get('api/route/'+routeid);
    }

    fetchDashboard(customer=''): Observable<any> {
        return this.apiRequest.get('api/container/dashboard?customer='+customer);
    }

    getContainersByTypeId(typeId):Observable<any> {
        return this.apiRequest.get(`api/containerParts/${typeId}`);
    }

    getContainersByStatus(status, customer=''):Observable<any> {
        return this.apiRequest.get(`api/containers/bystatus/${status}?customer=${customer}`);
    }
}