export class Returndeliveryrequest {
    id: number;
    rdcrequestno: string;
    requestedby: string;
    requesteddepartment: string;
    customerid: string;
    customername: string;
    supplierid: string;
    suppliername: string;
    receivertype: string;
    itemcode: string;
    itemname: string;
    itemtype: string;
    returnitemcode: string;
    returnitemname: string;
    returnitemtype: string;
    salesorderno: string;
    hsncode: string;
    quantity: number;
    uom: number;
    unitprice: number;
    totalprice: number;
    originatingCity: string;
    destinationCity: string;
    fromaddress: string;
    toaddress: string;
    pickuplocation: string;
    destinationlocation: string;
    returndate: Date;
    duedate: Date;
    returnindays: string;
    returnedby: string;
    status: string;
    createdby: string;
    updatedby: string;
    createdAt: Date;
    updatedAt: Date;
}