import { CPProcess } from './cpprocess. model';


export class ControlPlan {
    id: number;
    controlplannumber: string;
    partnumber: string;
    partname: string;
    itemcode: string;
    processcount: number;
    description: string;
    controlplandate: string;
    controlplantype: string;
    keycontactperson: string;
    keycontactphone:string;
    controlplanrevnumber: string;
    controlplanrevdate: string;
    drawingnumber: string;
    latestchangelevel: string;
    suppliercode: string;
    suppliername: string;
    plantname: string;
    supplierplantappovaldate: string;
    otherappovaldate: string;
    coreteam: string
    customerengapprovaldate: string;
    customerqualityapprovaldate: string;
    otherapprovaldate: string;
    preparedby: string;
    checkedby: string;
    approvedby: string;
    createdby: string;
    updatedby:string;
    createdAt: string;
    updatedAt: string;
    processarray: CPProcess[];
;
}



