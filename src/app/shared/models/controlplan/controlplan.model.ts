
import { OperationList } from "./operationslist.model";

export class ControlPlan{
    id: number;
    controlplantype: string;
    controlplanno: string;
    partnumber: string;
    partname: string;
    plant: string;
    plantcode: string;
    keycontact: string;
    coreteam: string;
    plantapprovaldate: Date;
    originaldate: Date;
    reviseddate: Date;
    customerengineeringapprovaldate: Date;
    customerqualityapprovaldate: Date;
    otherapprovaldate: Date;
    operationslist: OperationList[];
    createdAt: Date;
    updatedAt: Date;
}
