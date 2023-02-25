export class Inspectionreport {
    id: number;
    txnno: string;
    inspectionid: number;
    grnno: string;
    grnid: string;
    itemcode: string;
    itemname: string;
    qty: number;
    okqty: number;
    notokqty: number;
    reworkqty: number;
    onhold: number;
    attachment: string[];
    findings: string;
    status: string;
    createdby: string;
    updatedby: string;
    createdAt: Date;
    updatedAt: Date;
}
