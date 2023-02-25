export class Npdproject {
    id: number;
    npdprojectno : string;
    salesorderno : string;
    enquiryno: string;
    title: string;
    partno : string;
    partname : string;
    customer : string;
    team : string;
    planstartdate : Date;
    planenddate : Date;
    actualstartdate : Date;
    actualenddate : Date;

    projectcharterfile:string;
    responsibilitymatrixfile:string;
    riskmitigationfile: string;

    budgetcost: number;
    allocatedcost:number;
    balance: number;
    billedcost: number;

    salesbudgetcost:  number;
    salesallocatedcost: number;
    salesbalance:  number;

    marketingbudgetcost:  number;
    marketingallocatedcost: number;
    marketingbalance:  number;

    npdbudgetcost:  number;
    npdallocatedcost: number;
    npdbalance:  number;

    toolroombudgetcost:  number;
    toolroomallocatedcost: number;
    toolroombalance:  number;
    
    productionbudgetcost:  number;
    productionallocatedcost: number;
    productionbalance:  number;

    purchasebudgetcost:  number;
    purchaseallocatedcost: number;
    purchasebalance:  number;

    deliverydespatchbudgetcost:  number;
    deliverydespatchallocatedcost: number;
    deliverydespatchbalance:  number;

    status : string;
    ragstatus : string;
    createdby: string;
    updatedby: string;
}


