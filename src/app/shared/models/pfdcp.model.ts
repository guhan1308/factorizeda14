import { PfdcpRawMaterial } from './pfdcprawmaterial.model';
import { PfdcpQC } from './pfdcpqc.model';
import { PfdcpSubpart } from './pfdcpsubpart.model';

export class Pfdcp {
    id: number;
    partid: number;
    partno: string;
    partname: string;
    stepno: number;
    jobtype: string;
    jobname: string;
    machinetype: string;
    owner: string;
    materialrequest: string;
    qccheckrequest: string;
    qccheckfrequency: number;
    qcsamplesize: string;
    qcresponsible: string;
    qccontrolmethod: string;
    qcreactionplan: string;
    uom:string;
    status: string;
    pfdcprawmaterials : PfdcpRawMaterial[];
    pfdcpqcs : PfdcpQC[];
    pfdcpsubparts : PfdcpSubpart[];
    createdby: string;
    updatedby: string;

}