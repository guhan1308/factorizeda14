import { Co07_specificationtolerancelist } from "./co07_specificationtolerancelist.model";
export class Co06_Processmachineparamslist {
    id: number;
    paramno: string;
    paramname: string;
    paramtype: string;
    paramvalue: string;
    machinejigno: string;
    machinejigname: string;
    uom :  string;
    msupidarray : number[];
    monitorflag:boolean;
    evaluation: string;
    samplesize: number;
    samplefrequency: string;
    controlmethod: string;
    reactionplan: string;
    responsibility: string;
    errorproofing: boolean;
    co07_specificationtolerancelist: Co07_specificationtolerancelist[]
    createdby:string;
    updatedby:string;
    createdAt: Date;
    updatedAt: Date;
}


