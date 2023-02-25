import { Jobcalander } from './jobcalander.model';

export class MachineCalander {
    id: number;
    machineday: Date;
    shift: string;
    machinecode: string;
    machinename: string;
    machinetype: string;
    status: string;
    jobcalanders: Jobcalander[];
    createdby: string;
    updatedby: string;

}



