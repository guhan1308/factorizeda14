import { Operationsflowjobitems } from './operationsflowjobitems.model';

export class Operationsflowjobs {
    id: number;
    operationflowid: number;
    stepno: number;
    jobtype: string;
    jobname:string;
    planned: string;
    actual: number;
    uom : string;
    status: string;
    itemarray: Operationsflowjobitems[];
    createdby: string;
    updatedby: string;


}