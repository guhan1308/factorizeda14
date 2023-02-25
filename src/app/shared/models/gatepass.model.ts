import { GatepassItem } from "./gatepassItems.model";

export class Gatepass {
    id: number;
    gpno: string;
    gpdate: Date;
    invoiceno: string;
    dcno: string;
    suppliercode: string;
    suppliername: string;
    transitmode: string;
    vehicleno: string;
    remarks: string;
    receivedby: string;
    gatepassItems: GatepassItem[];
    status: string;
    createdby: string;
    updatedby: string;
    createdAt: Date;
    updatedAt: Date;

}
