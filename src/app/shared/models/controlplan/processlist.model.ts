import { Co04Machinejiglist } from "./co04_machinejiglist.model";
export class ProcessList{
    id: number;
    processno: string;
    processname: string;
    machinesjigList : Co04Machinejiglist[];
    createdAt: Date;
    updatedAt: Date;
}




