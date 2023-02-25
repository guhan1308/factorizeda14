import { InvoiceDetail } from './invoicedetail';

export class Invoice{
    id: number;
    companyid:string;
    companyname: string;
    totalamount: number;
    status : string;
    user: string;
    invoicedetail: InvoiceDetail[];

}


