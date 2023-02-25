import { AuditDetail } from './AuditDetail.model';

export class Audit{
    id: number;
    audittype:string;
    auditcategory :string;
    title  :string;
    auditorname :string;
    pocname  : string;
    doafrom : Date;
    doato : Date;
    duration :number;
    processname :string;
    status :string;
    comments :string;
    createdby: string;
    updatedby: string;
    auditdetails: AuditDetail[];
    

}


