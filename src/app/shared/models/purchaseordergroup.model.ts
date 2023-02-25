import { Purchaseorder } from "./purchaseorder.model";
export class Purchaseordergroup {
    id: number;
    pono: string;
    potype: string;
    supplierid: number;
    suppliercode: string;
    suppliername: string;
    pogenerationdate: Date;
    posentdate: Date;
    purchaseorders: Purchaseorder[];
    purchaseordersid: number[];
    status: string;
    createdby: string;
    updatedby: string;
    createdAt: Date;
    updatedAt: Date;
}

