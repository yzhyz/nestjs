import { User } from './user.interface';
export interface IUserService {
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(): any;
    edit(): any;
    remove(): any;
}
