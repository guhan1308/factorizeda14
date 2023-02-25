import { Sqaanswer } from "./sqaqnswer.model";
export class Sqaquestion {
    id: number;
    question: string;
    answers: Sqaanswer[];
    createdby: string;
    updatedby: string;
    createdAt: Date;
    updatedAt: Date;
}

