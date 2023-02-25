export class GrnItem{
    id: number;
    grnId: number;
    grnno: string;
    itemcode: string;
    itemname: string;
    itemtype: string;
    inspectionrequired: string;
    packagespec: string;
    lotno: string;
    batchno: string;
    manufacturingdate:Date;
    expirydate:Date;
    uom : string;
    unitprice: number;
    orderedqty: number;
    deliveredqty: number;
    okqty: number;
    rejectedqty: number;
    segragationqty: number;
    totalprice: number;
    attachment: string[];
    status:string;
    createdby: string;
    updatedby: string;
    createdAt: Date;
    updatedAt: Date;

}