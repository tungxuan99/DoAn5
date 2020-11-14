import { Role } from "./role";
export class User {
    id: number;
    username: string;
    password: string;
    HoTen: string;
    role: Role;
    token?: string;
}