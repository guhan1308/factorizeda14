import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Incident{
    id: number;
    incidentid: string;
    customerid: string;
    title: string;
    category: string;
    enquiryid:string;
    duedate: Date;
    description: string;   
    attachment: string[];
    severity: string;
    priority: string;
    assignedtogroup: string;
    assignedto: string;
    status: string;
    refid: string;
    processname: string;
    owner: string;
    closurenotes: string;
    problemnumber:string;
    createdby: string;
    updatedby: string;
    createdAt: Date;
    updatedAt : Date;

}


