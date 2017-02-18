import { Github } from './github.interface';

export interface UserCard {
    id: string,
    firstName: string,
    surname: string,
    country: string,
    githubs: Github[]
    photo?: string,
}
