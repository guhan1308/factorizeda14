export class DcItem{
    id: number;
    dcno: string;
    itemcode: string;
    itemname: string;
    packagespec: string;
    lotno: string;
    batchno: string;
    manufacturingdate:Date;
    expirydate:Date;
    uom : string;
    unitprice: number;
    qty: number;
    totalprice: number;
    attachment: string[];
    status:string;
    createdby: string;
    updatedby: string;
    createdAt: Date;
    updatedAt: Date;
    
}