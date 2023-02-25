import { Supplierdirectorypart } from "./supplierdirectorypart.model";
import { Supplierkeycontact } from "./supplierkeycontact.model";


export class Supplierdirectory {
    id: number;
    suppliercode: string;
    suppliername: string;
    supplieraddress: string;
    zipcode: string;
    city: string;
    country: string;
    phoneno: string;
    manufacturingtype: string;
    notes: string;
    attachment: string[];
    keycontacts: Supplierkeycontact[];
    supplierdirectoryparts: Supplierdirectorypart[];
    sqaaudit : boolean;
    createdby: string;
    updatedby: string;
    createdAt: Date;
    updatedAt: Date;

}
