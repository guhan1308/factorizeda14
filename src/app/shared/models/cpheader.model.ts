import { CPElement } from './cpelement.model';
import { CPElementGroup } from './cpelementgroup.model';

export class CPHeader {
    id: number;
    cpheaderid: number;
    cpprocessid: number;
    cpheadername: string;
    elementarray: CPElement[];
    elementgrouparray: CPElementGroup[];
    createdby: string;
    updatedby:string;
    createdAt: string;
    updatedAt: string;

}