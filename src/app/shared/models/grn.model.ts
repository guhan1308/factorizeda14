import { GrnItem } from "./GrnItems.model";

export class Grn{
    id: number;
    grnno: string;
    invoiceno: string;
    orderno: string;
    suppliercode: string;
    suppliername: string;
    grndate : Date;
    delivereddate: string;
    deliverylocation: string;
    costcentre: string;
    advnoteno: string;
    receivedby: string;
    qccheckedby: string;
    grnitems: GrnItem[];
    status: string;
    createdby: string;
    updatedby: string;
    createdAt: Date;
    updatedAt : Date;

}
