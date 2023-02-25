
import { Sqaquestion } from "./sqaquestion.model";
export class Sqa {
    id: number;
    suppliername: string;
    duedate: Date;
    sqaauditdate: Date;
    requestedby: string;
    requestowner: string;
    reqreason: string;
    attachment: string[];
    questionnaire : Sqaquestion[];
    sqastatus: string;
    reason: string;
    createdby: string;
    updatedby: string;
    createdAt: Date;
    updatedAt: Date;
    supplierdirectoryId : number;
}

