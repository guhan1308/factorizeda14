import { Operationsflowjobs } from './operationsflowjobs.model';

export class Operationsflow {
    id: number;
    partno: string;
    partname: string;
    parttype: string;
    operationscount: number;
    productcharacteristics: string;
    processcharacteristics: string;
    jobList: Operationsflowjobs[];
    status: string;
    createdby: string;
    updatedby: string;

}