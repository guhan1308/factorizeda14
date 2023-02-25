import { SupplierCertificate } from "./suppliercertificate.model";
import { Supplierkeycontact } from "./supplierkeycontact.model";


export class Suppliermaster{
    id: number;
    suppliercode: string;
    suppliername: string;
    supplieraddress: string;
    zipcode: string;
    city: string;
    country: string;
    phoneno: string;
    contactdepartment: string;
    keycontacts: Supplierkeycontact[];
    manufacturingtype: string;
    notes: string;
    sqaauditapprovalstatus: string;
    sqaauditapprovedby: string;
    sqaauditapprovedon: string;
    attachment: string[];
    status : string;
    suppliercertificates: SupplierCertificate[];
    createdby: string;
    updatedby: string;
    createdAt: Date;
    updatedAt : Date;

}
