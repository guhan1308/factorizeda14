import { ProcessList } from "./processlist.model";
export class OperationList {
    id: number;
    operationno: string;
    routecard: string;
    lotno: string;
    batchno: string;
    processlist: ProcessList[];
    createdAt: Date;
    updatedAt: Date;
}




