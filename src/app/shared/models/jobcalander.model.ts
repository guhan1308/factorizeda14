import { JobcalanderIHQCReport } from './JobcalanderIHQCRreport.model';
import { MachineCalander } from './machinecalander.model';
import { PfdcpQC } from './pfdcpqc.model';
import { PfdcpRawMaterial } from './pfdcprawmaterial.model';
import { PfdcpSubpart } from './pfdcpsubpart.model';

export class Jobcalander {
    id: number;
    salesorderno: string;
    customer: string;
    partid:number;
    partno: string;
    partname: string;
    ownership: string;
    operationjobflowid: number;
    stepno: number;
    jobname: string;
    jobtype: string;
    subparts: string;
    machinetype: string;
    productiontype:string;
    uom: string;
    lotno: string;
    batchno: string;
    plannedqty:number;
    cfqty:number
    actualqty:number;
    okqty:number;
    rejectedqty:number;
    segregationqty:number;
    reworkqty:number;
    operatorno:string;
    operatorname:string;
    processstatus : string;
    inspectionstatus: string;
    status: string;
    machinecalanders: MachineCalander[];
    owner:string;
    materialrequest:string;
    qccheckrequest:string;
    qccheckfrequency:number;
    qcsamplesize:string;
    qcresponsible: string;
    qccontrolmethod: string;
    qcreactionplan: string;
    jobcalanderqcs: PfdcpQC[];
    jobcalanderrawmaterials: PfdcpRawMaterial[];
    jobcalandersubparts: PfdcpSubpart[];
    jobcalanderihqcreport: JobcalanderIHQCReport[];
    createdby: string;
    updatedby: string;

}



