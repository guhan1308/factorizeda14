import { CPElementGroupItem } from './cpelementgroupitem.model';

export class CPElementGroup {
    id: number;
    cpelementgroupitemid: number;
    cpelementgroupid: number;
    cpelementgroupname: string;
    cpelementgroupitemarray: CPElementGroupItem[];
    createdby: string;
    updatedby:string;
    createdAt: string;
    updatedAt: string;

}