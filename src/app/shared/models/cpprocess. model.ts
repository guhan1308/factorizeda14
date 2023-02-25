import { CPHeader } from './cpheader.model';

export class CPProcess {
    id: number;
    controlplanprocessid: number;
    controlplanid: number;
    processnumber: string;
    processname : string;
    linkedcontrolplanid: number;
    linkedcontrolplannumber: string;
    imagefile:string;
    headerarray: CPHeader[];
    createdby: string;
    updatedby:string;
    createdAt: string;
    updatedAt: string;

}