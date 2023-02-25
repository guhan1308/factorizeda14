import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class WIPStock{
    id: number;
    partno: string;
    partname: string;

    uom: string;
    totalstock : number;
    okstock: number;
    okmtostock: number;
    okmtstock: number;
    okmtastock: number;
    rejectedstock: number;
    segregationstock: number;
    reworkstock: number;
    minstock: number;
    maxstock: number;
    status: number;
    createdby: string;
    updatedby: string;
    createdAt: Date;
    updatedAt : Date;

}


