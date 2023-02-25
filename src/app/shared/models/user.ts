import { Role } from "./role";
import { Process } from './process.model';

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    processid: string;
    processname: string;
    acl: string[];
    createdby: string;
    updatedby: string;
    status: string;
    roles: Role;
    photoname: string;
    accessToken: string;
}